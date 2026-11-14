# JODEL resource migration — editorial and launch checklist

This branch adapts the uploaded Maid2Clean reference files into **JODEL Cleaning** web resources without changing JODEL's existing logo, navy/teal/yellow palette, base pages, contact form, or **Bexley / surrounding South East London** coverage.

## Source-to-JODEL mapping

| Uploaded reference | JODEL implementation | Notes |
| --- | --- | --- |
| ClientHandbook2022.pdf | `/resources/client-handbook` | Reorganised into readable JODEL guidance. Removes another company's trading history, unsupported guarantees, insurance sums, fee rates, testimonials, and QR links. |
| CleanerHandbook2022.pdf | `/resources/cleaner-handbook` | Includes onboarding expectations, client meetings, work practices, keys, absences, payments, safety. Removes third-party cleaner portal, MaidVersity and unverified worker-status claims. |
| ClientInstructionChecklist.pdf | `/resources/client-instruction-checklist` | Keeps all six room groups and source tasks, A/B priority and done fields. Print / Save as PDF. |
| ClientProductChecklist.pdf | `/resources/client-product-checklist` | Keeps colour-coded cloth guidance and item-by-item supplies list, with checkboxes and print. |
| CleanerAttendancePayments.pdf | `/resources/attendance-payments` | Same record fields (date, hours, amount, signatures); now typeable and printable. |
| terms.pdf | `/terms` | JODEL Terms of Business with sections A–H: agency introductions, payments, £1m stated insurance cover, £100 first-loss threshold, responsibility, notice, 14-day cancellation and 18-month non-solicitation. Prices and late-cancellation amounts instead come from JODEL booking documentation. Mandatory consumer rights are protected. |
| Privacy Notice _ Maid2Clean.html | Expanded `/privacy` | JODEL-specific notice covering client and cleaner information, data controller, lawful purposes, data sharing, retention, rights, cookies and actual email/website providers. Franchise identifiers and unrelated Maid2Clean processors are excluded. |
| Local cleaning jobs ...html | `/resources/cleaning-jobs` | JODEL-only local enquiry information, no unsupported promises of jobs, portal, pay rates or nationwide coverage. |
| House Cleaning Time Calculator ...html | `/resources/calculator` | Same room categories and extras, 0–10 controls. Reference used a remote PHP calculation endpoint; its coefficients were not in the uploaded file. JODEL estimate uses visible provisional local assumptions. |
| How much does a house cleaner cost ...html | Existing quote-based pricing | No third-party prices carried over. JODEL confirms pricing individually. |
| London Cleaners ...html | Existing JODEL services page | Existing area constraints retained. No claims of servicing all London or prior third-party statistics. |
| Maid2Clean Reviews ...html | **NOT REPUBLISHED** | Testimonials belong to the source brand and cannot be represented as JODEL client reviews. |

## Revisit — pricing and calculator (required)

- [ ] Confirm JODEL's actual recurring / fortnightly / one-off / deep / end-of-tenancy cleaning rates and any minimum hours, regional distinctions, materials and agency fees.
- [ ] Verify whether pricing is direct to the cleaner, to JODEL, or split. Align client handbook and legally reviewed terms before publishing fixed prices.
- [ ] Calibrate calculator room/task time coefficients against JODEL clean-time records, or obtain the original algorithm with permission if exact parity is required. Check minimum booking durations, rounding, and deep-clean uplift.
- [ ] Decide whether calculator should collect only time requirements or also generate a priced quotation.
- [ ] Add tests for input bounds, rounding, reset, zero-room validation, and mobile usability.

## Legal and operational sign-off before merge

- [ ] Confirm actual JODEL insurance cover, vetting steps, key handling, replacement-cleaner availability and precise payment process.
- [x] Draft JODEL online terms and detailed privacy notice, linked from the website.
- [ ] Verify JODEL's contracting legal entity and business address; the current website does not contain a verified company registration/registered address.
- [ ] Obtain JODEL's actual £1m public liability insurance certificate and review the first £100 excess, theft exclusion and bleach exclusion. User states these match operating commitments; insurer/documentary evidence has not been inspected.
- [ ] Obtain UK legal review of the 18-month restriction, two-month termination notice, no-refund clauses and liability exclusions in the 2022 source under consumer fairness rules. The online adaptation preserves the intent without excluding mandatory consumer rights.
- [ ] Check any reproduction permissions and rewrite third-party material where necessary; do not publish another company's branding, claims or reviews as JODEL's.
- [ ] Ensure onboarding/worker classification accurately reflects current JODEL operations and UK law.
- [ ] Review the expanded JODEL `/privacy` against actual processing, email and hosting providers, applicant workflows, retention/deletion procedures, international transfers and legal controller identity.
- [ ] Verify live email/phone and actual service postcodes. Test forms and mobile/desktop print.
- [ ] Run `npm ci && npm run lint && npm run build` in a normal GitHub Actions or local environment. This connected session could not clone the public repository from its restricted runtime.

## Launch decision

This branch is intended for **review as a draft pull request**. The user confirmed JODEL accepts the same underlying operational commitments as the source agreement; `/terms` reflects that direction using JODEL-specific wording and consumer-law safeguards. The fees remain unpriced until individually confirmed, and actual insurance documentation, legal entity details and consumer-contract review still require launch sign-off. The privacy notice is adapted to this site’s actual data pathways rather than falsely inheriting Maid2Clean franchise infrastructure.
