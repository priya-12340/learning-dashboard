# Learning Dashboard

A Next.js Student Dashboard with Supabase integration.

## Tech Stack
- Next.js 14 (App Router)
- Supabase (PostgreSQL)
- Tailwind CSS
- Framer Motion
- Lucide React

## Setup
1. Clone the repo
2. Copy `.env.example` to `.env.local`
3. Add your Supabase URL and anon key
4. Run `npm install`
5. Run `npm run dev`

## Architecture
- Server Components fetch data from Supabase
- Client Components handle animations
- Loading skeletons shown during data fetch