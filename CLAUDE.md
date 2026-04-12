# CLAUDE.md — AI Engineering Portfolio

## Project Overview

Portfolio website for **Syamsul Huda** — AI Engineer specializing in LLM applications, multi-agent systems, RAG pipelines, and Go backends. Built with Next.js 14 + TypeScript + Tailwind CSS.

**Dev server**: `npm run dev` in this directory
**Build**: `npm run build`

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router, React 18, TypeScript) |
| Styling | Tailwind CSS 3.4 |
| Animations | Framer Motion, GSAP + ScrollTrigger |
| Scroll | React Lenis (smooth scroll) |
| Icons | Inline SVGs |

---

## Directory Map

```
app/
  layout.tsx        # Root layout, metadata, SmoothScroll wrapper
  page.tsx          # Homepage: Hero → BentoGrid → Footer
  globals.css       # CSS vars (#000 bg, #fff fg), Lenis styles

components/
  Hero.tsx          # Full-screen hero, grid bg, parallax, GSAP
  BentoGrid.tsx     # Main hub: Intro, Projects, Skills, Contact cards
  Navbar.tsx        # Fixed nav, scroll-aware transparency
  About.tsx         # Bio + focus areas (section#about)
  Projects.tsx      # 5 project cards (section#projects)
  Skills.tsx        # 5 skill categories (section#skills)
  Services.tsx      # 6 service cards (section#services)
  Contact.tsx       # Email/LinkedIn/GitHub (section#contact)
  Footer.tsx        # Copyright + links
  SmoothScroll.tsx  # Lenis wrapper (lerp: 0.1, duration: 1.2s)

data/
  projects.ts       # 5 featured projects with metadata
  skills.ts         # 5 skill categories
  services.ts       # 6 service offerings
```

---

## Design System

**Colors**: Black (#000) background, white text, violet-400/500/600 accents
**Cards**: `bg-white/[0.03]` + `border-white/[0.06]` glassmorphism
**Hover**: `border-violet-500/30` transitions
**Animations**: GSAP ScrollTrigger parallax + Framer Motion viewport triggers

---

## Owner: Syamsul Huda

- **Role**: AI Engineer + Software Engineer
- **Core tech**: Go, Python, LLMs, MCP Protocol, gRPC, RAG
- **5 featured projects**: The Trading Floor (multi-agent), MCP-gRPC Bridge, Astro AI Backend, RAG System (MTA AI), Vector DB POC

---

## Design Improvement Opportunities

The current site looks clean but **feels generic** for someone building agentic AI systems. Key gaps:

### 1. No "AI-native" feel
- The hero talks about AI but looks like any dev portfolio
- Missing: terminal-style animations, streaming text effects, agent "thinking" visualizations
- Add: typewriter effect for role title, animated token stream, or ASCII art grid

### 2. No live/interactive demos
- All projects are static cards — nothing moves or runs
- Opportunity: embed a mini chat interface or live agent trace visualization
- Even a fake "agent reasoning" animation would signal expertise better than text

### 3. Missing MCP/agent architecture visuals
- The MCP-gRPC Bridge and multi-agent projects are hard to understand from text alone
- Add: animated flow diagrams showing agent → MCP → gRPC chain
- SVG/canvas node graphs for multi-agent topology

### 4. Bento grid is underused
- Cards are mostly static text
- The skills marquee is the only truly animated card
- Opportunity: project card with animated code snippets, live GitHub stats, or streaming logs

### 5. No "proof of AI leverage" on the site itself
- A portfolio for an AI engineer should itself demonstrate AI capabilities
- Ideas: AI-powered chat with CV context, dynamic project summaries generated via LLM, "ask my AI" contact form
- Even a small "powered by Claude" easter egg signals credibility

### 6. Typography is safe
- Large bold text is standard — not distinctive
- Consider: monospace font for code/tech sections, gradient text on key phrases, variable font animations

### 7. Hero section could show agent activity
- Replace static glow blobs with: animated graph of agent nodes communicating, streaming log lines, or token probability heatmap
- The background grid is nice but passive — make it react to mouse position or scroll

---

## Code Conventions

- Components use default exports, PascalCase filenames
- Tailwind utility classes only (no CSS modules except globals.css)
- Framer Motion `motion.div` with `whileInView` + `viewport={{ once: true }}`
- GSAP used only in Hero for ScrollTrigger parallax
- Data is static TypeScript arrays in `/data/` — update there to change content
- No backend, no API routes — purely static/client-side

---

## Content Updates

To update projects/skills/services, edit the arrays in `/data/`:
- `projects.ts` — add `{ id, title, description, highlights[], technologies[], github?, live?, stack }`
- `skills.ts` — add to existing categories or add new `{ category, items[] }`
- `services.ts` — add `{ title, description, icon }`
