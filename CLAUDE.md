# CLAUDE.md — SAS-Website-revamp (place at repo root)

## Project

Next.js 14 App Router, static export (`output: 'export'`), Firebase Hosting at
spiritus-agentic-solutions.web.app. Build output: folder-per-route in `out/`.
Repo: github.com/Adonis278/Spiritus-Agentic-Solutions

Routes: `/`, `/about/`, `/services/`, `/case-studies/`, `/contact/`, `/learn/`,
`/process/`, `/industries/`, `/pricing/`.

Brand: unify blue `#008ad1`; Outfit (headings) + Lato (`font-body`).
Site supports dark AND light mode — both must work on every page.

## Non-negotiable working rules

1. **Dry-run first.** Preview the change set (files, what, why); wait for approval.
2. **Branch per push.** Never commit to `main`. Pattern: `wording-push-1`,
   `case-studies-deepdive`, `knowledge-hub`.
3. **Never auto-deploy.** `firebase deploy` only on explicit instruction in the
   current session.
4. **Flag anomalies, never assume them away.**

## Routing invariants (do not violate)

- `firebase.json` must NOT contain a catch-all rewrite (`"source": "**"` →
  `/index.html`). This previously broke all static routes. If found: remove, flag.
- `next.config.mjs` keeps `trailingSlash: true`. `firebase.json` keeps
  `cleanUrls: true`.
- Expected: `/about` → 301 → `/about/`; unknown routes → 404.

## Verification before handing work back (all of it, every time)

```powershell
npm run typecheck
npm run build
```

Then confirm:
- `out/<route>/index.html` exists for EVERY route listed above — not just the
  pages touched. A blank `/contact/` reached production because only edited
  pages were checked.
- Run `.\verify-site.ps1` (repo root) — smoke-tests every route against the
  Firebase emulator and checks redirects. Do not use bare `curl /about/` in
  Git Bash (MSYS path-mangling breaks it — that is why this script exists).
- **Dark AND light mode** render correctly on every page touched — the theme
  toggle regression on case-studies shipped to production once already.
- Internal links/buttons on touched pages point at live routes (no blanks).
- Reduced-motion: animations fall back to static under
  `prefers-reduced-motion: reduce`.
- List any placeholders introduced (e.g. `<WHATSAPP_NUMBER>`) in the handback.

## Deploy (only when instructed)

```powershell
npx firebase deploy --only hosting
```

Auth failures: do NOT retry blindly. Interactive login cannot run inside Claude
Code — tell Mako to run `npx firebase-tools login --reauth` himself, confirm
with `npx firebase-tools projects:list`, then retry.

## CI (GitHub Actions)

`.github/workflows/firebase-hosting-deploy.yml` exists but has failed on:
1. Missing lock file — `package-lock.json` MUST be committed (check
   `.gitignore` does not exclude it) for `actions/setup-node` cache and
   `npm ci` to work.
2. Firebase auth — CI cannot use `firebase login`. It needs a service-account
   secret: run `firebase init hosting:github` once locally to generate
   `FIREBASE_SERVICE_ACCOUNT_*` repo secret, and reference it in the workflow.
Until both are fixed, treat CI as broken and deploy manually on instruction.

## Content rules

- No client names on the live site without confirmed permission (AWFII stays off).
- No unverified numeric metrics; qualitative proof points only.
- Hero positioning: "Silicon Valley AI. Built for African ground."

## Handback format

End every session with: files changed (one-line reason each), verification
results, follow-ups/placeholders, deploy status. If context runs low, produce a
~210-word handoff: live capabilities, settled decisions, remaining rounds. Do
not re-open settled decisions later without flagging it.
