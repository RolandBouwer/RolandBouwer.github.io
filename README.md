# Roland Bouwer — Personal Portfolio

Live site: [https://rolandbouwer.github.io/#projects](https://rolandbouwer.github.io/#projects)

This repository contains my personal portfolio website built with React, Vite and TailwindCSS. It showcases projects, a short bio, and a contact form that uses EmailJS to forward messages.

## Tech stack

- React
- Vite
- TailwindCSS

## Development

1. Clone the repo and install dependencies:

```bash
git clone https://github.com/RolandBouwer/RolandBouwer.github.io.git
cd RolandBouwer.github.io
npm install
```

1. Run the dev server:

```bash
npm run dev
```

1. Build for production:

```bash
npm run build
npm run preview
```

## Contact form (EmailJS)

The contact form uses EmailJS to send messages from the client. You must provide these environment variables at build time so the site can send emails in production:

- `VITE_SERVICE_ID` — EmailJS service ID
- `VITE_TEMPLATE_ID` — EmailJS template ID
- `VITE_PUBLIC_KEY` — EmailJS public key

Local development: create a `.env` or `.env.local` at the project root with the variables above (replace the values):

```env
VITE_SERVICE_ID=service_xxx
VITE_TEMPLATE_ID=template_xxx
VITE_PUBLIC_KEY=public_xxx
```

CI / GitHub Pages Deploy: add the same three values as repository secrets and ensure they are exposed to the build step (the project's workflow already sets `VITE_*` at the job level so the build can access them).

Note: the project now uses `@emailjs/browser` (replaced the deprecated `emailjs-com` package).

## Deployment

This site is published to GitHub Pages from this repository. The workflow in `.github/workflows/main.yml` builds the site and deploys the `dist` artifact to Pages.

## Contributing / Notes

- The site is a personal project and not currently accepting external contributions; feel free to open an issue if you spot a bug.
- After making changes, run `npm run build` to verify there are no compile-time problems.

If you want me to add a short changelog entry about switching to `@emailjs/browser`, I can append that here.

## Changelog

- 2025-11-06 — Replaced deprecated `emailjs-com` with `@emailjs/browser`. Also:
	- Improved contact form UX: added loading state, accessible success/error messages, and clearer error logging.
	- Added a guard and warning when EmailJS `VITE_*` environment variables are not set.
	- Ensured CI exposes `VITE_SERVICE_ID`, `VITE_TEMPLATE_ID`, and `VITE_PUBLIC_KEY` at build time so production builds include the correct configuration.

## EmailJS (Contact form) setup

The contact form uses EmailJS to send messages from the client. To enable the contact form in production you need to provide three environment variables at build time:

- `VITE_SERVICE_ID` — your EmailJS service ID
- `VITE_TEMPLATE_ID` — your EmailJS template ID
- `VITE_PUBLIC_KEY` — your EmailJS public key (sometimes called `user` or `publicKey`)

When deploying from GitHub Actions, these should be added as repository secrets and exposed to the build step. Example: add the three secrets to your repo (Settings -> Secrets) and ensure your CI sets them for the build step (not only the deploy step). The workflow in `.github/workflows/main.yml` has been updated to make these available to the build.

For local development, create a `.env.local` or `.env` file at the project root with the following keys (replace with your values):

```
VITE_SERVICE_ID=service_xxx
VITE_TEMPLATE_ID=template_xxx
VITE_PUBLIC_KEY=public_xxx
```

Note: Vite requires the `VITE_` prefix so values are exposed to client code at build time.
