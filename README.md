# diBoaS (“dee-boas”)

A platform democratizing wealth-building opportunities.

## 📖 Description

diBoaS is a zero-budget, Phase 0/1-ready monorepo built with Next.js (React + TypeScript), Fastify, Turborepo, and more. It includes four subdomains:

- **www.diboas.com** — Landing page & waitlist
- **app-test.diboas.com** — Phase 0 mock/test build (signup, swap, etc.)
- **docs.diboas.com** — Static documentation
- **learn.diboas.com** — YouTube-linked learning center

## 🏗️ Tech Stack

- **Frontend**: Next.js v14, Tailwind CSS, Radix UI, shadcn/ui, React Query, Zustand  
- **Backend**: Node.js LTS, Fastify v4, Zod, JWT, Magic Auth  
- **Monorepo**: Turborepo, TypeScript project refs  
- **DB & Cache**: Supabase (Postgres), Upstash (Redis)  
- **Infra**: Vercel, Fly.io (Phase 0), Terraform  
- **CI/CD**: GitHub Actions  
- **Testing**: Jest, React Testing Library, Cypress, axe-core  

## 🚀 Getting Started

```bash
# Clone & install
git clone git@github.com:bribeirobr25/diBoaS.git
cd diBoaS
git checkout phase-0
npm install

# Start all apps in dev mode
npm run dev
