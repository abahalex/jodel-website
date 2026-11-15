# JODEL issue #1 — what is settled, what still needs a decision

This document accompanies [Issue #1](https://github.com/abahalex/jodel-website/issues/1). It is operational guidance; it is **not** proof of insurance, an actuarial/cleaning time study, or legal advice.

## Already implemented

- The website publishes JODEL-branded terms of business and a JODEL-specific privacy notice.
- **Pricing confirmed by JODEL on 15 November 2026:** guide price **£21.50/hour**, with the actual quoted hourly rate potentially **lower or higher**. **No agency fee and no service charge**. Extras such as oven cleaning depend on the time required, not a fixed add-on fee. The payment recipient and exact rates for each booking must be confirmed individually. All old source-agency fee obligations have been removed from the customer terms.
- The online calculator reproduces 7 room types, 6 optional recurring tasks, plus/minus controls with 0–10 bounds, half-hour rounding and zero-room validation.
- The estimation formula and every provisional room/task coefficient are now in `src/lib/cleaning-time.mjs`, with behaviour tests in `tests/cleaning-time.test.mjs` (run `npm run test:calculator`).
- JODEL website copy no longer refers to another company's "source agreement" or cleaner portal.

## Decisions or evidence still required from the business owner

| Topic | What is missing | Why it matters |
| --- | --- | --- |
| Pricing details still missing | Guide £21.50/hour and no agency/service fee are confirmed. Still need the final rate and expected hours for specific bookings, any minimum booking duration, and whether deep, tenancy and one-off cleans have a separate quotation basis. Extras are time-dependent. | We must not present the guide rate as a fixed guaranteed price for every clean. |
| Payment and cancellation | Agency fee and service charge are confirmed as **£0**. Still unknown: whether customers pay JODEL or cleaners, payment due dates/method, and whether any late cancellation fee exists. | Customer contract must accurately describe who is paid and any cancellation charges. |
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

Do **not** assume a minimum duration or deep-clean multiplier unless JODEL confirms the booking policy and provides supporting measurements. Keep the calculator as a provisional **time-only** planner until calibration. The website can separately advertise the £21.50/hour guide; do not turn the provisional minutes into a binding quote.

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
- [x] Guide price confirmed: £21.50/hour (may be lower/higher), **no agency fee, no service charge**, time-based extras.
- [ ] Exact payment recipient/method, minimum hours, specialised service quoting and cancellation policy confirmed.
- [ ] Calculator coefficients calibrated or explicitly accepted as a provisional, non-priced planner.
- [ ] Insurance schedule, company identity and privacy operations checked.
- [ ] External legal review where needed and live quote-form/print/build smoke tests completed.

Until these are signed off, **leave Issue #1 open** and do not say it has been entirely resolved.
