# STINET DIGITAL - FRONTEND LOCAL DEVELOPMENT

## Runtime versions (verified on the development machine)
- Windows 10/11
- PowerShell 5.1
- Git 2.49.0
- Node.js v22.20.0
- npm (bundled with Node.js)

## Stack (frontend only)
- Next.js 16.4.3 (App Router, src directory, Turbopack build)
- React 19.3.0
- TypeScript 5.x
- Tailwind CSS 4.x with @tailwindcss/postcss
- ESLint 9.x with eslint-config-next

## One-time setup

1. Clone the repository.
2. From the repository root, install dependencies:

   npm install

3. Copy the environment template:

   Copy-Item .env.example .env.local

4. Edit `.env.local` if the backend API URL differs from the default. Never commit `.env.local`.

5. Run the production build once to confirm the scaffold compiles:

   npm run build

Expected: `Compiled successfully` and static pages generated.

## Day-to-day

- Development server: `npm run dev`
- Production build: `npm run build`
- Production server (after build): `npm run start`
- Lint: `npm run lint`

The dev server listens on http://localhost:3000/.

## Environment variables

Only `NEXT_PUBLIC_*` variables are exposed to the browser. Never place secrets behind `NEXT_PUBLIC_`.
See `.env.example` for the full list.
See `stinet-backend/docs/SECRETS-STRATEGY.md` for rules.

## PowerShell notes

- PowerShell 5.1 does not support `&&`. Use `;` or separate commands.
- Paths containing spaces must be quoted: `"C:\Users\Stinet Digital\..."`.

## Do not

- Do not commit `.env`, `.env.local`, `node_modules/` or `.next/`.
- Do not change the Next.js version without approval.
- Do not add animation or design libraries without a written reason and approval.
- Do not hardcode the backend URL - use `NEXT_PUBLIC_API_BASE_URL`.