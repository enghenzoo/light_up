# Natura Beauty - Developer Documentation

This document provides guidance for developers working on the **Natura Beauty** e-commerce application.

---

## Project Overview

**Project Name:** Natura Beauty  
**Description:** Online store for natural skincare products built with **Next.js 15** (App Router).  

**Features:**
- User authentication (credentials + Google OAuth)
- Product catalog with categories
- Shopping cart and checkout
- Order management
- Admin panel for products, orders, and stock

---

## Development

### Start Development
```bash
npm run dev
```
Runs the Next.js development server at [http://localhost:3000](http://localhost:3000) with hot reload.

### Build
```bash
npm run build
```
Creates an optimized production build.

### Run Production
```bash
npm start
```
Runs the production build locally.

### Lint
```bash
npm run lint
```
Runs ESLint checks.

### Database
```bash
# Generate migrations from schema changes
npm run db:generate

# Apply migrations
npm run db:migrate

# Open Drizzle Studio (GUI)
npm run db:studio
```

---

## Architecture

### Database Layer
- **ORM:** Drizzle ORM (Turso/SQLite)
- **Database file:** `src/db/light_up.db`
- **Schema:** `src/db/schema.ts`
- **Client:** `src/db/index.ts` exports `db`
- **Tables:** `users`, `admins`, `products`, `categories`, `orders`, `orderItems`, `addresses`, `payments`, `stockMovements`

### Models Layer
- All queries go through model functions in `src/models/`  
  Example: `src/models/products.ts`  
- API routes should call model functions, not access the database directly  
- Use Drizzle ORM query builders (`select`, `insert`, `update`, `delete`) and operators (`eq`, `gte`, `lte`, etc.)  
- Use TypeScript type inference for inserts: `typeof tableName.$inferInsert`

### API Layer
- **Location:** `src/app/api/`
- Each folder represents an endpoint (`route.ts` exports GET, POST, PUT, DELETE)
- Dynamic routes use `[id]` or `[slug]`
- Key endpoints: `/api/products`, `/api/orders`, `/api/auth`, `/api/categories`, `/api/users`, `/api/admins`, `/api/payments`, `/api/stock`, `/api/addresses`

### Authentication
- JWT-based using **jose** library
- Tokens stored in HTTP-only cookies named `token`
- Utilities:
  - `src/lib/verifyToken.ts` — verifies tokens
  - `src/middleware.ts` — protects routes (`/checkout` and others)
- OAuth: Google OAuth 2.0 (`/api/auth/google/*`)
- Required env variables: `JWT_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `APP_URL`

### State Management
- **Zustand** with localStorage persistence
- Example: `src/store/cartStore.ts`

### Components
- **UI Components:** `src/components/ui/` (shadcn/ui + Radix UI)
- **Feature Components:** `src/components/` (header, product-card, pagination, products-filter)
- Path alias: `@/*` → `./src/*`
- shadcn/ui style: `components.json` with "new-york" theme

### Styling
- Tailwind CSS 4
- `cn()` utility in `src/lib/utils.ts` (clsx + tailwind-merge)
- Fonts: Geist Sans, Cairo, Playfair Display

### App Router Structure
- `src/app/` — pages and layouts
- Root layout: `src/app/layout.tsx` (includes Header)
- Pages: `/`, `/about`, `/products`, `/product/[id]`, `/category/[slug]`, `/cart`, `/checkout`, `/order-confirmation`, `/login`, `/search`, `/categories`

### Type Safety
- TypeScript strict mode
- Drizzle ORM type inference for queries and inserts
- Path alias: `@/*` configured in tsconfig.json

---

## Patterns & Best Practices

### API Routes
1. Import model functions from `src/models/`
2. Export async functions named after HTTP methods (GET, POST, PUT, DELETE)
3. Use `NextResponse.json()` for responses
4. Wrap in try-catch with proper error handling
5. Extract query params using `new URL(req.url).searchParams`

### Database
1. Always use model functions
2. Use Drizzle ORM query builders and operators
3. Import schema from `@/db/schema`
4. Leverage TypeScript type inference

### Adding Features
1. Update schema in `src/db/schema.ts`
2. Run migrations: `npm run db:generate` → `npm run db:migrate`
3. Create model functions in `src/models/`
4. Add API routes in `src/app/api/`
5. Add page components in `src/app/`

### Authentication Example
```ts
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/verifyToken';

const token = cookies().get('token')?.value;
if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

try {
  const payload = await verifyToken(token, process.env.JWT_SECRET!);
  // payload: { id, email, name }
} catch {
  return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
}
```

### Protected Routes
Add new routes to `src/middleware.ts` matcher:
```ts
export const config = {
  matcher: ['/checkout', '/new-protected-route'],
};
```

---

## Technology Stack
- **Framework:** Next.js 15.5 (App Router + React Server Components)  
- **Language:** TypeScript 5.9  
- **Database:** SQLite (Turso/libSQL) with Drizzle ORM  
- **Authentication:** JWT (jose) + Google OAuth  
- **State Management:** Zustand with localStorage  
- **Styling:** Tailwind CSS 4  
- **UI Library:** shadcn/ui (Radix + Tailwind)  
- **Forms:** react-hook-form + Zod  
- **HTTP Client:** Axios  
- **Icons:** Lucide React
