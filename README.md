# NIVORA — Independent Digital Studio

Modern freelance technology studio portfolio website built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

## Overview

NIVORA is an independent digital studio focused on designing and building modern, high-performance, responsive websites.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **Language**: TypeScript (strict typing)
- **Styling**: Tailwind CSS v4
- **Fonts**: Inter & Poppins (next/font/google)
- **Theme**: Light & Dark mode support (persisted with zero-flash inline script)

## Project Structure

```
app/
  layout.tsx           Root layout with fonts, ThemeProvider, Header, and Footer
  page.tsx             Homepage (Hero, TechStack, Selected Work, Services, Why Us, Process, FAQ, CTA)
  work/
    page.tsx           Work showcase index
    [slug]/page.tsx    Reusable case-study detail route (SSG with generateStaticParams)
  services/page.tsx    What We Build (Business Websites, Landing Pages, React/Next.js, WordPress)
  about/page.tsx       Studio philosophy, ethos, and principles
  contact/page.tsx     Interactive inquiry form with project types and INR budget tiers
  terms/page.tsx       Engagements, IP ownership, and confidentiality policy
  robots.ts            Search engine crawler directives
  sitemap.ts           XML sitemap generation

components/
  ui/                  Design system building blocks (Button, Card, Icon, Container, SectionHeading...)
  layout/              Global layout elements (Header, Footer, ProjectCtaBanner)
  sections/            Homepage sections (Hero, TechStack, ProjectsShowcase, ServicesGrid, WhyChooseUs, ProcessSection, FaqSection, FaqAccordion)

data/
  content.json         Centralized single source of truth for all website content

lib/
  content.ts           Typed accessor for site content
  utils.ts             Utility helpers (cn, formatting)

types/
  index.ts             TypeScript interfaces for site content, projects, services, and navigation
```

## Centralized Content Management

All website content is managed in `data/content.json`:
- `site`: Brand name, descriptor, contact details, socials, and copyright.
- `navigation`: Header navigation links and call-to-action.
- `hero`: Eyebrow, headline, supporting text, and buttons.
- `technologies`: Core modern technologies highlighted.
- `projects`: Portfolio case studies (title, category, challenge, approach, deliverables, tech stack).
- `services`: Services offered with descriptions and deliverables.
- `whyNivora`: Studio value points ("Built with intention.").
- `process`: 4-step studio delivery workflow.
- `about`: Studio story and foundational principles.
- `faqs`: Frequently asked questions and honest answers.
- `contact`: Project inquiry options and budget ranges.

## Color Palette

- Background: `#FFFFFF`
- Soft Background: `#F7F9F8`
- Primary Text: `#111111`
- Secondary Text: `#667085`
- Primary Accent: `#20A090`
- Dark Section: `#101817`

## Getting Started

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run TypeScript checks
npx tsc --noEmit

# Run production build
npm run build
```
