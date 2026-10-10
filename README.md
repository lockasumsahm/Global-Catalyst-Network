# Global Catalyst Network
### A web presence for youth collaboration and community initiatives

The public website for Global Catalyst Network, presenting its mission, programs, team, and participation pathways.

[Website](https://gcn.inkspirehq.live) · [Page source](src/pages/) · [Components](src/components/)

## Purpose

GCN connects young people around leadership, cultural exchange, and community work. This repository contains the website used to communicate that mission and help visitors explore the initiative.

## Website structure

| Page | Purpose |
| :--- | :--- |
| [Home](src/pages/Index.tsx) | Introduce the network and its work |
| [About](src/pages/About.tsx) | Explain the mission and values |
| [Programs](src/pages/Programs.tsx) | Present participation areas |
| [Impact](src/pages/Impact.tsx) | Present community work |
| [Team](src/pages/Team.tsx) | Introduce the team |
| [Join](src/pages/Join.tsx) | Participation interface |
| [Contact](src/pages/Contact.tsx) | Contact interface |

This is the website source, not an independently audited record of organizational impact. Participation and contact pages should be checked against their configured destinations before relying on submissions.

## Stack and interface

**React · TypeScript · Vite · Tailwind CSS · shadcn/ui**

Framer Motion supports animated sections; React Helmet Async manages page metadata. Shared navigation and footer components keep the site's page structure consistent.

## Run locally

With Node.js, npm, and Git installed:

```bash
git clone https://github.com/lockasumsahm/Global-Catalyst-Network.git
cd Global-Catalyst-Network
npm install
npm run dev
```

Use the local URL printed by Vite.

## Check and build

```bash
npm run lint
npm run build
npm run preview
```

Before publishing changes, review navigation, mobile layouts, keyboard access, reduced-motion behavior, and the actual delivery of contact or joining submissions. This documentation update does not claim those checks have passed.

## Repository guide

- `src/pages/` — public website pages.
- `src/components/` — navigation, footer, and shared UI.
- `src/assets/` — images and other visual assets.
- `public/` — static public files.

## Project context

**Founder:** Abdullah Amir · [GitHub](https://github.com/lockasumsahm)

The site uses a Lovable-generated application foundation. Organizational milestones and impact statements require supporting records beyond the website code.

Review repository licence terms before reusing code or organizational assets; public visibility alone does not grant a reuse licence.
