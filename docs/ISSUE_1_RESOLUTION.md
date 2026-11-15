# JODEL issue #1 — what is settled, what still needs a decision

This document accompanies [Issue #1](https://github.com/abahalex/jodel-website/issues/1). It is operational guidance; it is **not** proof of insurance, an actuarial/cleaning time study, or legal advice.

## Already implemented

- The website publishes JODEL-branded terms of business and a JODEL-specific privacy notice.
- The user's instruction confirms that the **agency service commitments** correspond to the uploaded reference agreement, **except actual prices and calculator methodology**. The website preserves the separately payable agency/cleaner model conditionally in the written booking agreement. It does **not** insert the reference organisation's £40 fee or £7.50 cancellation penalty.
- The online calculator reproduces 7 room types, 6 optional recurring tasks, plus/minus controls with 0–10 bounds, half-hour rounding and zero-room validation.
- The estimation formula and every provisional room/task coefficient are now in `src/lib/cleaning-time.mjs`, with behaviour tests in `tests/cleaning-time.test.mjs` (run `npm run test:calculator`).
- JODEL website copy no longer refers to another company's "source agreement" or cleaner portal.

## Decisions or evidence still required from the business owner

| Topic | What is missing | Why it matters |
| --- | --- | --- |
| Cleaning prices | JODEL's real regular weekly/fortnightly hourly rate, one-off, deep, end-of-tenancy and after-builders pricing approach; whether quoted per hour or job; minimum booking hours and extra-task charges. | Without this, the calculator must NOT show a monetary quote or invent a fee. |
| Agency fees | Actual amount, billing cadence, and late cancellation charge (if any). | The agreement can describe the operating model but should not advertise the other company’s charges. |
| Calculator accuracy | Actual completed maintenance visits with room counts, requested extras, actual cleaner-hours, repeat frequency and whether first/regular clean. | No evidence yet establishes that the provisional coefficients predict actual working time. |
| Insurance | Current JODEL insurance certificate/schedule, insurer, term, named insured, £1m policy, £100 first-loss/claim condition, theft and bleach exclusions. | The customer's confirmation of a commitment does not itself verify a policy is in force. |
| Legal details | Correct legal/trading entity, service address/registered-office information if applicable, and applicable consumer terms reviewed for fairness. | Necessary for accurate information and appropriate customer contracts. |
| Privacy operations | Real retention/deletion process in the business inbox, whether cleaner ID/referee records are kept, processors and onward sharing. | Public privacy claims must match real practice rather than another firm's infrastructure. |
| Operational verification | Working inbox, Vercel env vars, contact number, print UX, and deployed quote API test. | A successful build alone does not prove leads are received. |

## Calibration plan — smallest useful experiment

Use **real, anonymised** visit records. Do NOT record client names, addresses, contact details or cleaner names in this research dataset. Avoid using a shared spreadsheet of personal information.

Minimum suggested sample: 20–30 completed **regular maintenance cleans**, capturing a mix of different home sizes; this is a *pilot* to detect obvious bias, not enough to guarantee statistical precision.

For each visit, record these columns in this order:

`visit_id,frequency,visit_type,bedrooms,bathrooms,living,kitchens,utility,hallways,stairs,ironing,laundry,windows,fridge,dishes,bedding,actual_minutes,notes_nonidentifying`

- `frequency`: weekly or fortnightly.
- `visit_type`: regular / initial / deep / one-off. Only **regular** observations should calibrate the regular-clean model.
- Room columns: integers 0–10; extras columns: 0 or 1.
- `actual_minutes`: elapsed **active cleaner time** summed across workers (one cleaner working 2 hours = 120 minutes; two workers for 2 hours = 240 minutes). Keep arrival/transport time separate.
- `notes_nonidentifying`: eg "heavy kitchen grease", not an address or personal detail.

Compare observed minutes against predicted raw minutes for each visit. Compute error `predicted_minutes - actual_minutes`, absolute error, median absolute error, and median bias, separated by weekly/fortnightly visits. Look for consistent underestimation in bathrooms, large kitchens, stairs or optional tasks. Adjust coefficients only with supporting data; review the new predictions against a held-out set before changing the published formula.

Do **not** assume a minimum duration or deep-clean multiplier unless JODEL has confirmed its booking policy and measured it. Continue displaying a provisional maintenance-clean time estimate, with no price, until calibration is complete.

## Consumer and privacy checks (UK)

- Confirm the 14-day distance/off-premises cancellation information, and secure an **express customer request** before starting an eligible service within that period (with the additional acknowledgements needed where applicable).
- Review the proportionality of any 2-month customer notice and 18-month non-solicitation restriction with a UK legal professional. The source commitments are not evidence the clauses are enforceable in every case.
- Provide the consumer with written pre-contract pricing and the precise contracting party/terms before a booking becomes binding.
- Validate that the JODEL privacy notice accurately states controller contact details, lawful bases, sharing, retention/deletion procedures and international transfers.

References checked 15 November 2026:
- [CMA, Writing a fair contract for customers](https://www.gov.uk/guidance/writing-a-fair-contract-for-customers)
- [Consumer Contracts Regulations 2013, Part 3](https://www.legislation.gov.uk/uksi/2013/3134/part/3)
- [ICO: Right to be informed](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/right-to-be-informed/)

## Release criteria

- [x] Terms and privacy pages published in the repository.
- [x] Reference-only language removed from customer-facing terms and cleaner materials.
- [x] Pure, testable calculator model split from UI, input bounds/rounding/zero-room automated tests.
- [ ] Real JODEL price/fees/minimum hours supplied and verified.
- [ ] Calculator coefficients calibrated or explicitly accepted as a provisional, non-priced planner.
- [ ] Insurance schedule, company identity and privacy operations checked.
- [ ] External legal review where needed and live quote-form/print/build smoke tests completed.

Until these are signed off, **leave Issue #1 open** and do not say it has been entirely resolved.
