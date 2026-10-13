# JODEL — Next.js Cleaning Business Website

A production-oriented, one-page enquiry website for JODEL cleaning services in London, designed for a quick launch on Vercel. Built with Next.js App Router, React, TypeScript, and plain CSS. **No Wix, booking engine, CMS or payment integration required.**

## Features

- Responsive, premium landing page with four service categories from the JODEL flyer (plus one-off enquiries), how-it-works, FAQs and enquiry form.
- Customisable public contact details and optional WhatsApp link.
- Server-side enquiry endpoint sends details to your inbox using [Resend](https://resend.com) (requires configuration).
- Required fields, postcode format check, form consent acknowledgement, HTML escaping and a simple honeypot field.
- Privacy notice starter page, metadata, social sharing card, sitemap, robots.txt and favicon.
- No fake reviews, prices, insurance claims, staff credentials, booking promises or hidden fees.
- Placeholder photos use Unsplash image URLs over a locally bundled illustration fallback; replace them with your own commercially cleared photos when possible.

## Run locally

Requires Node.js 20.9+ and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

On Windows PowerShell, instead of `cp` use:

```powershell
Copy-Item .env.example .env.local
```

Open http://localhost:3000.

## Important: Configure the contact form BEFORE sharing the site

Form submissions **are NOT emailed automatically** until you configure Resend. An unconfigured form intentionally returns an error instead of pretending that a lead was saved. Do not publish until you have submitted a successful test form and seen the email arrive.

1. Set up an account at https://resend.com.
2. Add and verify your domain in Resend, following their DNS instructions. This is **separate** from pointing your website at Vercel. Preserve existing MX, SPF and DKIM records if you already have business email.
3. Create an API key.
4. Set the following **private** environment variables in Vercel:
   - `RESEND_API_KEY` — secret key; never put it in client code.
   - `LEADS_TO_EMAIL` — the inbox that should receive quote requests.
   - `LEADS_FROM_EMAIL` — verified sender in format `JODEL <enquiries@your-domain.co.uk>`.
5. Set the **public** variables:
   - `NEXT_PUBLIC_SITE_URL` — your actual production URL, `https://jodelcleaning.com` (no trailing `/`).
   - `NEXT_PUBLIC_CONTACT_PHONE` — your callable business number, if ready, `020 8936 7708` (from flyer; **verify number before launching**!).
   - `NEXT_PUBLIC_CONTACT_EMAIL` — customer-facing business email, if ready.
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` — **only** if WhatsApp Business is actually working on it; digits only, e.g. `447700900000`.
6. In development set the same values in `.env.local`. Restart the server after editing environment variables.
7. On the deployed website submit a test quote to your own inbox and check all details arrive. Verify that your phone and/or WhatsApp links work before posting listings.

The WhatsApp button is hidden until you set `NEXT_PUBLIC_WHATSAPP_NUMBER`; this matters because your virtual number is still awaiting WhatsApp verification.

### Resend notes

Resend requires a verified domain to send to arbitrary customers/inboxes. Use a verified sender address for `LEADS_FROM_EMAIL`. `LEADS_TO_EMAIL` should be a mailbox you monitor. The server sends one notification message **to your business**; it doesn't create a customer account or automatically confirm a booking. Resend may charge based on your volume and plan; check its current pricing.

For higher traffic or spam abuse, add a proper rate limit/CAPTCHA and anti-abuse monitoring. The starter includes a honeypot only.

## Deploy to Vercel

> **Important cost note:** Vercel explicitly restricts its free Hobby plan to personal, non-commercial projects. A business marketing site like JODEL is commercial, so deploying it publicly on Vercel requires an eligible paid **Pro** or **Enterprise** plan. Check https://vercel.com/docs/limits/fair-use-guidelines and current pricing before committing. This matters if you are trying to avoid ongoing website costs. If you would rather use lower-cost commercial hosting, the project can be adapted.

Recommended: push this folder (excluding `.env.local` and `node_modules`) to your private GitHub repository.

1. Go to https://vercel.com/new and import your GitHub repository.
2. Vercel should detect **Next.js**. Keep project root as `/` if your repository root is this folder.
3. In **Project Settings → Environment Variables**, add the variables above and choose Production (and Preview if you want test submissions there).
4. Deploy. Test the Vercel `.vercel.app` address before connecting your domain.
5. Open **Project Settings → Domains** and add your domain. Vercel will tell you exactly which DNS records to change at your registrar (commonly an A record for the root domain and a CNAME for `www`). **Use the current DNS values from Vercel, not old copied instructions.**
6. Wait for verification and HTTPS, then set `NEXT_PUBLIC_SITE_URL` to the exact public URL and redeploy.
7. Check that your existing business-email DNS records are **not disturbed**. Only update the website records that Vercel instructs you to change.
8. Run a final quote-form test on your **real domain**.

Alternative CLI deployment:

```bash
npm i -g vercel
vercel login
vercel
vercel --prod
```

The CLI will guide you through project creation. Add environment variables and domain in the dashboard.

Official documentation:
- https://vercel.com/docs/frameworks/full-stack/nextjs
- https://vercel.com/docs/domains/set-up-custom-domain
- https://resend.com/nextjs

## Items to personalise before going live

- [ ] Set your real domain, business phone and inbox. Leave WhatsApp blank until working.
- [ ] Configure Resend (form). Send a successful **live** test.
- [ ] Confirm the actual locations you serve. The page deliberately says "London subject to postcode availability" rather than promising London-wide coverage.
- [ ] Review advertised service categories; remove anything you cannot presently fulfil.
- [ ] Check your operational capacity, suitable insurance and cleaning arrangements before accepting bookings.
- [ ] Review and adapt the `/privacy` notice for your legal entity, contact details, data retention and any additional processors; ensure appropriate UK GDPR compliance. Consider adding business registration details where required.
- [ ] Replace stock imagery when you have your own high-quality photos and ensure you have appropriate permissions to use them.
- [ ] Test mobile, keyboard navigation, all links, submission responses, and real emails.
- [ ] If you accept online bookings/payments later, add suitable terms, cancellation policies and further data protection details.

## How it works / scope

This is a **lead-generation website**, not an automatic booking platform. A customer submits an enquiry and JODEL responds manually with availability, price, and arrangements. That keeps initial build and operating costs low while you get your first customers.

### Where to customise

| Part | File |
|---|---|
| Business name, contact and area summary | `src/lib/site.ts` |
| Headlines, services, FAQ, text | `src/app/page.tsx` |
| Colours, layout and backgrounds | `src/app/globals.css` |
| Form fields and client handling | `src/components/QuoteForm.tsx` |
| Backend email delivery | `src/app/api/quote/route.ts` |
| Privacy notice | `src/app/privacy/page.tsx` |
| Metadata | `src/app/layout.tsx` |

## Security notes

`RESEND_API_KEY` must stay server-side. Never expose your key using `NEXT_PUBLIC_`. The server checks basic input and escapes user-provided HTML, but production operators should add managed bot/rate limiting if spam increases. No personal data is stored in a database; enquiry details go to the configured email inbox and are retained there under your inbox retention settings. The endpoint doesn't guarantee delivery to Inbox (only acceptance by the email provider); test spam-folder handling.

## October 2026 — official JODEL Cleaning assets

The project now includes the JODEL Cleaning logo and brand colours taken from the supplied business logo/flyer. Public domain and email have been set to `https://jodelcleaning.com` and `info@jodelcleaning.com` respectively. The social image also includes the actual supplied logo.

**Critical phone-number discrepancy to resolve before advertising:**
- Flyer shows **02089367708** (`020 8936 7708`), an 11-digit UK London-format number.
- Message typed **020289367708**, which is **12 digits** and not a standard London 020 number.
- The temporary website currently displays the **flyer number** as a provisional default. Confirm the actual purchased number with your provider and replace `NEXT_PUBLIC_CONTACT_PHONE` or `src/lib/site.ts` before publishing.

WhatsApp is deliberately hidden until the number can receive WhatsApp messages. The image of the flyer showing a WhatsApp logo is **not proof it is verified**.

This is an updated source package, not a live deployment. Email quote requests require verified Resend domain and server-side variables. If you don't want Resend yet, continue collecting enquiries by phone/email while the form is being configured, but do not publish an apparently working form that silently drops leads.
