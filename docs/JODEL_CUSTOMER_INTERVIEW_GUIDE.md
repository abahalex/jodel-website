# JODEL — real-customer validation interviews

**Purpose:** Validate or falsify the objections raised by synthetic scenarios before making marketing or pricing decisions. This is a research guide, not a sales pitch. Do not claim findings until real responses are collected.

## Recruitment

Recruit 12–20 **real Bexley-area residents who plausibly need domestic cleaning**, including people who currently pay for a cleaner and people who have considered hiring one but declined. This is a qualitative sample, not representative polling. Seek a variety of household circumstances without collecting unnecessary sensitive personal data. Keep no names or addresses in public research notes. Secure informed consent for the interview, notes, and any later use of the data; don't record audio without explicit permission.

Avoid recruiting only friends/family or only existing JODEL customers.

## Introduction to read

"We're researching how people in Bexley decide whether to use a regular home cleaning service. This is not a sales call and there is no right answer. We want to hear what would genuinely help or put you off. Taking part is voluntary. May I take anonymous notes? You may skip a question or stop at any time."

## Unprompted questions — before showing the offer

1. When did you last consider hiring or changing a domestic cleaner? What happened?
2. What do you currently do for home cleaning? If a cleaner is involved, how often?
3. What factors matter most when deciding whether to let a cleaner into your home?
4. What would stop you hiring one, even if you wanted the help?
5. What is the last *actual* total price you saw or paid for a regular clean? If none, say so; don't invent a figure.

## Randomised concept test

Randomly show one of the three *matched-price* JODEL positioning descriptions in `research/jodel_ssr.py` (A_price, B_time, C_clarity). Do not show other descriptions first or suggest a preferred answer.

6. In your own words, what is JODEL offering? What is unclear?
7. Would you actually submit an enquiry for your home within the next month, or not? Why? What details are missing?
8. What *total visit cost* would you expect for a 2-hour clean? A 3-hour clean?
9. If you were ready to enquire, what would be the most natural next step: phone, WhatsApp, web form, or something else? Why?
10. What single change to this offer would make the biggest difference to your decision?

After the main interview, you may show all three wording variants and ask which is clearest, but **do not mix that preference into the single-concept intent comparison**.

## Record these fields only

- Interview ID (not full name)
- Approximate postcode district (e.g. DA8, not full postcode)
- Uses a domestic cleaner now? (yes/no)
- Last real cleaning purchase/quote if any; frequency and total amount if recalled
- Randomised concept ID
- Verbatim intent statement
- Primary objection(s) and trust questions
- Whether participant stated intention to enquire within 30 days (yes/no/unsure)
- No booking, unless participant later makes an actual tracked booking through ordinary channels

## Analysis discipline

The interviews should challenge the synthetic theory, not be used to rubber-stamp it. Keep contradictions and negative statements. Do not represent stated intention as actual purchase. If respondents consistently cannot tell what the visit includes or its *total* cost, prioritise changing the offer's clarity before optimising for an SSR score. Only after genuine exposure-to-enquiry and enquiry-to-booking metrics exist should we estimate conversion.
