# Niresh Shakya Portfolio

A responsive React + Vite + Tailwind CSS recreation of the supplied portfolio references.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Customize before publishing

- Replace `hello@example.com` in `src/main.jsx` with your real email address.
- Replace the GitHub and LinkedIn profile URLs with your own.
- Edit the `skills` and `projects` arrays near the top of `src/main.jsx`.
- Replace `public/images/portrait-hero.jpg` and `portrait-about.jpg` with your original, high-resolution photos. The included images are crops from the supplied screenshot and are only reference-quality.
- The project cards are stylized previews. Replace them with screenshots and live project links when available.

## Interactions included

- First-visit loading screen with animated progress.
- Responsive navigation.
- Scrolling ticker strips.
- Skills category filtering, individual hover effects, and random shuffle.
- Project carousel with arrows, pagination, and mobile controls.
- Contact form that prepares an email using the visitor's default mail application.

The contact form uses `mailto:` because no backend endpoint was provided. Connect it to a form service or your own API for server-side delivery.
