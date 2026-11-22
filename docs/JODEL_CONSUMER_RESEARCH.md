# JODEL Cleaning — consumer research pilot (2026-11-22)

**State:** executable research protocol; model-generated survey NOT run yet. This work does not change the live website, pricing or operational promises.

## Hypothesis and scope

Explore whether, for JODEL's regular weekly/fortnightly cleaning in Bexley and surrounding South East London, price transparency, routine convenience, or personalised scope generates greater simulated enquiry intent. **This is not evidence of actual local demand.** JODEL's published offer remains a £21.50/hour guide (not a fixed quote), no separate agency or service charge, with time-dependent extras and prices confirmed before booking.

The existing repo is a quote-enquiry website, not a guaranteed online booking service. Preserve the logo, colour theme, service area, and existing privacy notice. Do not attribute third-party reviews/history to JODEL.

## Background evidence (publicly advertised prices; checked 22 Nov 2026)

| Provider | Publicly advertised local regular-clean price | Qualification |
| --- | --- | --- |
| JODEL | £21.50/hour guide | User-provided JODEL policy; actual quote may vary |
| Maid2Clean Bexley | from £18.80/hour weekly; £19.10 fortnightly | Minimum hours and terms may apply; agency business model differs |
| Time For You Bexley | £20/hour, weekly or fortnightly | Three-hour minimum advertised |
| Diamond Home Support Bexley | from £20/hour | 'From' is not the final quote |
| Monster Cleaning Bexley | £22/hour weekly; £24 fortnightly | The page also displays inconsistent older £23 wording; verify exact quote |

Sources:
- https://www.maid2clean.co.uk/domestic-cleaning/bexley/
- https://timeforyou.cleaning/Uk/home-cleaning/bexley/
- https://diamondhomesupport.com/domestic-cleaning/bexley/
- https://monstercleaning.com/domestic-cleaning-bexley/

Advertised competitor offers are not matched for supplies, taxes, minimum hours, cover, or terms. These rates do not establish willingness to pay.

## Method adapted from Maier et al., arXiv:2510.08338v3

Original paper: *LLMs Reproduce Human Purchase Intent via Semantic Similarity Elicitation of Likert Ratings* (2025). The authors tested SSR on 57 **US personal-care product** surveys with 9,300 human responses. They did **not** validate it for UK domestic cleaning services.

1. Show a fictional persona one service concept and ask for a brief free-text response about authentic enquiry/booking interest; do not directly request a 1–5 score.
2. Generate independent, context-isolated responses for every persona × concept pairing, shuffling order.
3. Embed each response and six independently worded sets of five Likert-anchor statements using `text-embedding-3-small`.
4. Per anchor set, compute cosine similarity, subtract the minimum, normalize to probability mass, then average across six sets. This adapts Equation 8 in Appendix A.4.3 with g=0, T=1.
5. Compare response distributions, expected ratings, and qualitative objections. **The resulting top-two share is a share of synthetic Likert mass, not a real booking or conversion probability.**
6. Test positioning and pricing in separate experiments to avoid confounding.

The paper's reference anchors were tuned to its original survey set. These JODEL anchors are freshly drafted and unvalidated; sensitivity to anchor wording should be assessed against real responses before interpreting the numbers.

## Experiments

**Phase 1: positioning, constant £21.50/hour**

- A_price — straightforward price and no extra fees.
- B_time — convenience and adapting to household routines.
- C_clarity — personalised scope and quotation before booking.

**Phase 2: price, constant core proposition**

- £21.50/hour (current guide)
- £24.00/hour (hypothetical)
- £27.00/hour (hypothetical)

No statements about same cleaner, insurance, DBS checking, fixed appointment availability, or included equipment appear in any concept; those commitments have not been independently verified.

## Run

Uses only Python 3 standard library and the OpenAI API; **requires an operator-provided API key and incurs API charges**. No API key is committed.

```sh
python -m unittest discover -s research -p 'test_*.py'
export OPENAI_API_KEY="YOUR_KEY"  # set privately in your shell, never commit
python research/jodel_ssr.py --phase positioning --personas 12 --output research/results-positioning
python research/jodel_ssr.py --phase pricing --personas 12 --output research/results-pricing
```

Each phase performs 36 isolated synthetic responses (12 personas × 3 conditions). These 12 personas are **invented examples, not a representative sample of the Bexley population**. A larger panel should be drawn from actual local customer/market research rather than repeating near-identical invented personas. Each output folder receives `responses.json` (checkpoint), `scored_responses.json`, and `summary.csv` and is gitignored.

### Quality gates

- Run unit tests; check for all 36 responses and no API errors.
- Examine whether results invert under alternate anchor sets or alternate model prompts; unstable rankings should be disregarded.
- Counterbalance ordering and ensure only the tested variable differs between conditions.
- Distinguish demographic hypotheses from evidence; do not assign census weights without real population data.
- Do not publish or advertise a winning concept purely because it scores highest in synthetic responses.
- Collect a handful of real customer interviews, then a randomised matched landing-page/quote test with tracked eligible exposures and completed enquiries; subsequently track actual confirmed bookings and contribution margin.
- Obtain appropriate consent before using real enquiry data to calibrate a model; avoid sharing identifiable client information with model APIs without a defined lawful basis and appropriate notices.

## First real-customer validation question set

1. How do you currently keep your home clean? When did you last consider paying for help?
2. What would most likely make you decide to enquire? What would stop you?
3. For a two- or three-hour regular visit, what would you expect the *total price* to be?
4. Would you prefer weekly or fortnightly visits, and why?
5. What would you need to know before allowing a new cleaner into your home?
6. Would you actually request a quote based on the shown concept? What questions remain?

Ask about past behaviour before hypothetical intent; record whether the person genuinely needs a cleaner now, but don't treat these answers as conversions.

## Next commercial decision

Choose a messaging variant for a controlled test **only after** it has coherent synthetic qualitative feedback and clears actual customer feedback. Choose price using *actual contribution margin and customer acceptance*, not synthetic score alone. With customer charge £21.50 and cleaner pay assumption £13.50, the initial £8.00/hour gross difference is not profit; travel, payment fees, insurance, holiday/employer costs where applicable, and admin must be included.

The Python harness deliberately cannot run without an API key; no generated results or fictitious customer measurements are checked into the repository.
