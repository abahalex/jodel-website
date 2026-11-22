#!/usr/bin/env python3
"""JODEL exploratory synthetic-customer survey using the paper's SSR recipe.

Use with OPENAI_API_KEY. Results are synthetic, NOT real customer purchase probabilities.
Only fictional personas are sent to the API. Standard library only.
"""
from __future__ import annotations

import argparse
import csv
import json
import math
import os
from pathlib import Path
import random
import time
from urllib.error import HTTPError
from urllib.request import Request, urlopen

PERSONAS = [
    ("P01", "25, renting in Erith, single professional, tight discretionary budget; irregular work shifts"),
    ("P02", "32, two working adults and one child in Bexleyheath; household time is scarce"),
    ("P03", "38, parent of two in Sidcup, budget-sensitive; currently does all cleaning personally"),
    ("P04", "45, dual-income household in Welling; values predictable scheduling"),
    ("P05", "54, homeowner in Bexley Village; had an unreliable cleaner previously"),
    ("P06", "68, retired homeowner in Belvedere; values familiarity and clear arrangements"),
    ("P07", "29, renting with a flatmate in Crayford; jointly decides on nonessential spending"),
    ("P08", "41, self-employed in Erith; unpredictable weekly calendar and occasional visitors"),
    ("P09", "35, homeowner in Blackfen with a pet; concerned about access to the home"),
    ("P10", "62, retired in Sidcup; would consider fortnightly rather than weekly cleaning"),
    ("P11", "47, shift worker in Thamesmead; wants clear total per-visit pricing"),
    ("P12", "31, professional in Barnehurst; compares cleaners before committing"),
]

# Same service/price, different positioning. Don't add unsupported claims.
POSITIONING = {
    "A_price": "Straightforward cleaning. JODEL offers regular weekly or fortnightly home cleaning. Guide price £21.50 per hour, with no separate agency/service charge. Final rate and availability are agreed before booking.",
    "B_time": "Cleaning that works around your life. JODEL offers regular weekly or fortnightly cleaning tailored to household priorities and routine. Guide price £21.50 per hour, with no separate agency/service charge. Final rate and availability agreed before booking.",
    "C_clarity": "Clear, personalised cleaning. Discuss your home priorities with JODEL, agree the scope, and receive a clear quote before booking regular weekly or fortnightly cleaning. Guide price £21.50/hour, with no separate agency/service charge; final rate and availability agreed before booking.",
}
# Identical message except price. Each listed price is hypothetical, NOT JODEL's published price.
PRICING = {
    f"rate_{p:.2f}": f"JODEL offers regular weekly or fortnightly home cleaning, tailored to home priorities, with a quote agreed before booking. Hypothetical guide price £{p:.2f} per hour, no separate agency/service charge. Final rate and availability confirmed before booking."
    for p in (21.50, 24.00, 27.00)
}

# Independently written anchor variants. Not the paper's original calibrated anchors.
# Each set contains exactly one anchor for Likert levels 1..5.
ANCHORS = [
    ["I definitely would not book this service.", "I probably would not book this service.", "I am unsure whether I would book this service.", "I would probably book this service.", "I would definitely book this service."],
    ["I have no intention of hiring JODEL.", "I am not very interested in hiring JODEL.", "I might consider hiring JODEL.", "I am interested and would likely hire JODEL.", "I am certain I would hire JODEL."],
    ["I would rule out purchasing this service.", "The service is unlikely to get my business.", "I have mixed feelings and cannot decide.", "The service is likely to get my business.", "I would absolutely purchase this service."],
    ["No, I would not arrange a clean.", "I doubt I would arrange a clean.", "Perhaps I would arrange a clean.", "Yes, I would likely arrange a clean.", "I would certainly arrange a clean."],
    ["I would avoid booking this cleaning offer.", "I lean against booking this cleaning offer.", "I am on the fence about booking.", "I lean toward booking this cleaning offer.", "I feel ready to book this cleaning offer."],
    ["This offer does not interest me at all.", "This offer has little appeal to me.", "This offer could appeal depending on details.", "This offer appeals to me enough to consider booking.", "This offer strongly appeals to me and I would book."],
]

def dot(a, b):
    return sum(x * y for x, y in zip(a, b))

def cosine(a, b):
    if len(a) != len(b) or not a:
        raise ValueError("Embedding dimensions must match and be nonempty.")
    d = math.sqrt(dot(a, a) * dot(b, b))
    return dot(a, b) / d if d else 0.0

def ssr_distribution(response_embedding, anchor_embeddings):
    """Six-set mean of cosine-minus-min normalized distributions, paper Eq. 8 (g=0, T=1)."""
    if not anchor_embeddings or any(len(group) != 5 for group in anchor_embeddings):
        raise ValueError("Need anchor groups of five Likert statements.")
    total = [0.0] * 5
    for group in anchor_embeddings:
        similarities = [cosine(response_embedding, anchor) for anchor in group]
        floor = min(similarities)
        weights = [max(0.0, value - floor) for value in similarities]
        denom = sum(weights)
        probabilities = [value / denom for value in weights] if denom > 1e-12 else [0.2] * 5
        total = [t + p for t, p in zip(total, probabilities)]
    return [value / len(anchor_embeddings) for value in total]

def api(path, payload, key):
    req = Request("https://api.openai.com/v1/" + path,
                  data=json.dumps(payload).encode("utf-8"),
                  headers={"Authorization": "Bearer " + key, "Content-Type": "application/json"},
                  method="POST")
    for retry in range(4):
        try:
            with urlopen(req, timeout=90) as response:
                return json.load(response)
        except HTTPError as exc:
            body = exc.read().decode("utf-8", "replace")[:400]
            if exc.code in (429, 500, 502, 503, 504) and retry < 3:
                time.sleep(2 ** retry)
                continue
            raise RuntimeError(f"OpenAI API HTTP {exc.code}: {body}") from exc

def generate_text(persona, concept, key, model):
    system = ("You are a fictional respondent in an exploratory UK household-cleaning concept survey. "
              "Adopt the practical circumstances described, without caricature or stereotypes. "
              "Make a realistic choice based on constraints, rather than trying to please the surveyor. "
              "You have not booked this service and cannot verify any business claims. "
              "Write 2-4 sentences explaining whether you would consider making a genuine booking enquiry, "
              "what matters, and any unanswered question. Do NOT output a score, number, or list.")
    prompt = f"Household context: {persona}\n\nOffer under review: {concept}\n\nWould you genuinely enquire or book? Why or why not?"
    result = api("responses", {
        "model": model, "store": False, "max_output_tokens": 240,
        "input": [{"role": "system", "content": system}, {"role": "user", "content": prompt}]
    }, key)
    chunks = [item.get("text", "") for entry in result.get("output", [])
              for item in entry.get("content", []) if item.get("type") == "output_text"]
    answer = " ".join(chunks).strip()
    if not answer:
        raise RuntimeError("Model returned no text; check API response/output format.")
    return answer

def embed_texts(texts, key, model):
    result = api("embeddings", {"model": model, "input": texts}, key)
    vectors = [entry["embedding"] for entry in sorted(result["data"], key=lambda d: d["index"])]
    if len(vectors) != len(texts):
        raise RuntimeError("Embedding response length mismatch.")
    return vectors

def run(args):
    key = os.environ.get("OPENAI_API_KEY")
    if not key:
        raise SystemExit("Missing OPENAI_API_KEY. No survey was run and no synthetic ratings were produced.")
    concepts = POSITIONING if args.phase == "positioning" else PRICING
    personas = PERSONAS[:args.personas]
    jobs = [(person_id, description, name, concept)
            for person_id, description in personas for name, concept in concepts.items()]
    random.Random(args.seed).shuffle(jobs)
    outdir = Path(args.output)
    outdir.mkdir(parents=True, exist_ok=True)
    responses = []
    checkpoint = outdir / "responses.json"
    if checkpoint.exists():
        raise SystemExit(f"{checkpoint} exists. Choose a new --output to avoid mixing runs.")
    for i, (person_id, description, name, concept) in enumerate(jobs, start=1):
        answer = generate_text(description, concept, key, args.model)
        responses.append({"persona_id": person_id, "persona": description,
                          "condition": name, "phase": args.phase, "text": answer})
        checkpoint.write_text(json.dumps(responses, indent=2) + "\n")
        print(f"Generated {i}/{len(jobs)}: {name}, {person_id}")
    anchor_texts = [statement for group in ANCHORS for statement in group]
    embeddings = embed_texts(anchor_texts + [r["text"] for r in responses], key, args.embedding_model)
    grouped = [embeddings[i:i + 5] for i in range(0, len(anchor_texts), 5)]
    for item, vector in zip(responses, embeddings[len(anchor_texts):]):
        pmf = ssr_distribution(vector, grouped)
        item["likert_distribution"] = [round(x, 6) for x in pmf]
        item["expected_rating"] = round(sum((i + 1) * p for i, p in enumerate(pmf)), 4)
    (outdir / "scored_responses.json").write_text(json.dumps({
        "warning": "Synthetic exploratory simulation, NOT observed human purchase intent or actual booking probabilities.",
        "phase": args.phase, "generation_model": args.model, "embedding_model": args.embedding_model,
        "personas": len(personas), "anchor_sets": len(ANCHORS), "results": responses
    }, indent=2) + "\n")
    summary = []
    for name in concepts:
        rows = [r for r in responses if r["condition"] == name]
        values = [sum(r["likert_distribution"][k] for r in rows) / len(rows) for k in range(5)]
        summary.append({"condition": name, "n_synthetic": len(rows),
                        "mean_rating": round(sum((i + 1) * p for i, p in enumerate(values)), 3),
                        "synthetic_top_two_share": round(values[3] + values[4], 3),
                        **{f"p_{i+1}": round(v, 3) for i, v in enumerate(values)}})
    with (outdir / "summary.csv").open("w", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=summary[0].keys())
        writer.writeheader()
        writer.writerows(summary)
    print("\nSYNTHETIC ONLY — not human conversion probabilities\n")
    for row in summary:
        print(f"{row['condition']}: mean rating {row['mean_rating']:.3f}; synthetic top-two share {row['synthetic_top_two_share']:.3f}")
    print(f"Saved raw, scored, and summary outputs to {outdir}/")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--phase", choices=("positioning", "pricing"), default="positioning")
    parser.add_argument("--personas", type=int, default=12)
    parser.add_argument("--seed", type=int, default=20261122)
    parser.add_argument("--model", default="gpt-4.1-mini")
    parser.add_argument("--embedding-model", default="text-embedding-3-small")
    parser.add_argument("--output", default="research/results")
    args = parser.parse_args()
    if not 1 <= args.personas <= len(PERSONAS):
        parser.error(f"--personas must be between 1 and {len(PERSONAS)}")
    run(args)
