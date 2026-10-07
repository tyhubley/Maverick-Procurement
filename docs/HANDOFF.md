# Website Handoff Checklist — Maverick Procurement

This is the list of everything you need to do to fully own and run the website
yourself. There are four accounts involved. Work through them top to bottom.

> **Short version:** the website's *code* lives on GitHub, the *live site* is hosted
> on Vercel (it re-publishes automatically whenever the code changes), the *contact
> form* emails you through Resend, and the *web address* (maverickprocure.com) is
> pointed at Vercel through your domain registrar.

---

## 1. GitHub — the code

The source code currently lives at **github.com/tyhubley/Maverick-Procurement**
(under Ty's account).

**What to do:**
- [ ] Create a free GitHub account at https://github.com (if you don't have one).
- [ ] Have the repository **transferred** to your account, **OR** have Ty add you as
      a collaborator (Repo → Settings → Collaborators).
- [ ] (Alternative) You also have a full copy of the files in the zip you were
      given — that's your backup even if you never touch GitHub.

---

## 2. Vercel — the hosting (the live website)

Vercel is what actually publishes the site to the internet. It's connected to the
GitHub repo, so **every time the code is updated on GitHub, the live site updates
automatically** within about a minute.

**What to do:**
- [ ] Create an account at https://vercel.com (sign in with your GitHub account).
- [ ] Have the Vercel **project transferred** to your account (Ty can do this from
      Project → Settings → transfer), **OR** create a new project and import the
      GitHub repo.
- [ ] After transfer, re-add the environment variable in step 3 if it didn't carry over.
- [ ] Confirm the live site loads and the domain is attached (step 4).

Free ("Hobby") plan is fine for a marketing site like this.

---

## 3. Resend — the contact form email

The contact form emails submissions to **jim.boldrey@maverickprocure.com**. It needs
an API key from Resend, or the form will show "Email service is not configured."

**What to do:**
- [ ] Create an account at https://resend.com.
- [ ] Create an API key: https://resend.com/api-keys (it looks like `re_xxxxxxxx`).
- [ ] In Vercel → your project → **Settings → Environment Variables**, add:
      - Name: `RESEND_API_KEY`   Value: your `re_...` key   (Environments: Production + Preview)
- [ ] **Redeploy** the site (Vercel → Deployments → ⋯ → Redeploy) so the key takes effect.
- [ ] Send yourself a test message from the Contact page to confirm it arrives.
- [ ] *(Recommended, later)* Verify the domain `maverickprocure.com` in Resend so
      email comes "from" your own domain. Then add `RESEND_FROM_EMAIL` in Vercel,
      e.g. `Maverick Website <contact@maverickprocure.com>`.

---

## 4. Domain — maverickprocure.com

The web address needs to point at Vercel.

**What to do:**
- [ ] Confirm who owns the domain registration (GoDaddy / Namecheap / Google Domains,
      etc.) and that the login is in your name.
- [ ] In Vercel → Project → **Settings → Domains**, add `maverickprocure.com` and
      `www.maverickprocure.com`. Vercel shows the exact DNS records to set.
- [ ] At your domain registrar, enter those DNS records.
- [ ] Wait for it to verify (can take a few minutes to a few hours).

---

## 5. Housekeeping (optional but recommended)

- [ ] Change the contact-form recipient if needed — it's the line
      `const TO = "jim.boldrey@maverickprocure.com"` in
      `app/api/contact/route.ts`.
- [ ] Keep the `.env.local` file and your Resend key private — never post them publicly.
- [ ] Bookmark this file (`HANDOFF.md`) and `README.md` — they explain how to run and edit the site.

---

## Quick reference

| Thing | Where | Login owner should be |
|-------|-------|-----------------------|
| Code | github.com/tyhubley/Maverick-Procurement | You |
| Hosting | vercel.com | You |
| Contact email | resend.com | You |
| Domain | your registrar (maverickprocure.com) | You |
| Form recipient | jim.boldrey@maverickprocure.com | — |

**If you want to make text/image changes but don't code:** the easiest path is to
keep Ty (or any developer) with GitHub access, describe the change, and they push it —
the live site updates on its own. Nothing else is required.
