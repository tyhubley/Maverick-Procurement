# Maverick Procurement — Website

Marketing website for Maverick Procurement, built with **Next.js 14** (App Router),
React, TypeScript, and Tailwind CSS. Hosted on **Vercel**. The contact form sends
email through **Resend**.

---

## Running it on your own computer

You need **Node.js 20+** installed (https://nodejs.org — download the "LTS" version).

```bash
# 1. Install the dependencies (one time)
npm install

# 2. Start the site in development mode
npm run dev
# → open http://localhost:3000 in your browser
```

Other commands:

```bash
npm run build   # make a production build
npm run start   # run the production build locally
```

---

## The contact form (important)

The contact form on the **Contact** page emails submissions to
`jim.boldrey@maverickprocure.com`. It uses a service called **Resend**.

For the form to work, an environment variable named `RESEND_API_KEY` must be set:

- **On your computer:** create a file named `.env.local` in this folder containing:
  ```
  RESEND_API_KEY=re_your_key_here
  ```
- **On Vercel (the live site):** add `RESEND_API_KEY` under
  Project → Settings → Environment Variables, then redeploy.

Without this key the form returns "Email service is not configured."

Optional: set `RESEND_FROM_EMAIL` (e.g. `Maverick Website <contact@maverickprocure.com>`)
once you verify your domain in Resend. If you don't, it uses Resend's test sender.

See `contact-form.env.template` for the full explanation.

---

## Project layout

| Folder | What's in it |
|--------|--------------|
| `app/` | The pages. `app/(marketing)/` holds the public pages (home, about, services, contact, blog, etc.). `app/api/contact/route.ts` is the contact-form email handler. |
| `components/` | Reusable pieces (header, footer, hero, etc.). `components/ui/` is the design-system library. |
| `lib/` | Content data — `blog-posts.ts` and `case-studies-data.ts` hold the blog/case-study text. |
| `public/` | Images, logos, PDFs (sell sheet), and other static files. |
| `styles/` / `app/globals.css` | Styling and theme colors. |

**To edit page text**, find the matching file under `app/(marketing)/`.
**To edit blog posts or case studies**, edit the files in `lib/`.
**To swap a logo or image**, replace the file in `public/`.

---

## Where things live (accounts)

- **Code:** GitHub — https://github.com/tyhubley/Maverick-Procurement
- **Hosting:** Vercel (auto-deploys when code is pushed to GitHub)
- **Contact-form email:** Resend
- **Domain:** maverickprocure.com

See `HANDOFF.md` for the step-by-step checklist to take full ownership of these.
