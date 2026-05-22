<<<<<<< HEAD
# aradhana_new
=======
# Aradhana Public School Monorepo

Premium school management system scaffold with:

- Backend: Java 21, Spring Boot 3.3, Spring Security, PostgreSQL, JPA
- Frontend: React (Vite), Tailwind CSS, Framer Motion, Lucide React

## Repository Structure

```
backend/   Spring Boot API
frontend/  Public-facing React app
```

## Monorepo Scripts (from root)

Install root tooling once:

```bash
npm install
```

Run apps:

```bash
npm run dev:backend
npm run dev:frontend
```

Run both together:

```bash
npm run dev
```

## Backend

1. Configure PostgreSQL credentials in `backend/src/main/resources/application.yml`
2. Start backend:

```bash
cd backend
mvn spring-boot:run
```

Public endpoint:

- `GET /api/public/health`

## Frontend

1. Install and run:

```bash
cd frontend
npm install
npm run dev
```

The homepage includes:

- Sticky premium navigation with apply CTA
- Editorial hero masthead
- Legacy timeline
- Admissions process card
>>>>>>> 00eed0c (Initial commit)
