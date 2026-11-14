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
| terms.pdf | **NOT PUBLIC** | Fee, payment, cancellation, 18-month restriction, insurance and liability terms are material legal commitments. Do not rebrand and publish this 2022 third-party agreement without checking actual JODEL terms and UK legal compliance. |
| Privacy Notice _ Maid2Clean.html | Existing `/privacy` retained | JODEL has its own starter notice and its real data-handling arrangements; not safe to substitute another controller's notice. Review as part of launch. |
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
- [ ] Have JODEL's proposed terms drafted/reviewed: what is sold, who is the contracting party, self-employed vs employed cleaner arrangements, cancellation and consumer rights, liability/insurance, deposits, fees and records.
- [ ] Check any reproduction permissions and rewrite third-party material where necessary; do not publish another company's branding, claims or reviews as JODEL's.
- [ ] Ensure onboarding/worker classification accurately reflects current JODEL operations and UK law.
- [ ] Review JODEL `/privacy` against actual processing (Resend, enquiry email, any future client/cleaner accounts) and correct controller details.
- [ ] Verify live email/phone and actual service postcodes. Test forms and mobile/desktop print.
- [ ] Run `npm ci && npm run lint && npm run build` in a normal GitHub Actions or local environment. This connected session could not clone the public repository from its restricted runtime.

## Launch decision

This branch is intended for **review as a draft pull request**. The JODEL forms are working printable website forms, not copies of the Maid2Clean PDFs. Publishing the third-party legal agreement verbatim with only a new logo is intentionally excluded because those terms would make specific potentially inaccurate commitments for JODEL.
