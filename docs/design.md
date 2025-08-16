# 🎨 Design Document

## 1. Overview
This project is a **full-stack inventory & shipment management system** with **AI-powered analytics/chatbot**.  
It is designed to demonstrate:
- Secure authentication
- CRUD operations with calculated fields
- Listing, filtering, and pagination
- Clean frontend architecture with state management
- Effective integration of AI (Gemini LLM)

---

## 2. Core Design Goals
- **Simplicity** → Minimal but functional implementation in 24 hours.
- **Maintainability** → Layered architecture for backend, feature-based structure for frontend.
- **Security** → JWT authentication & route guards.
- **Scalability** → Modular design, easily extendable to new entities.
- **AI Integration** → Natural-language access to product data through Gemini.

---

## 3. Backend Design

### Key Decisions
- **Framework:** Node.js + Express for lightweight REST API.
- **Database:** MongoDB (Mongoose) for flexible schema.
- **Authentication:** JWT-based, with middleware for route protection.
- **Validation:** Simple schema validation and error middleware.
- **Business Logic:** Kept in controllers (services optional).
- **Documentation:** Swagger for API exploration.

### Authentication Flow
1. User registers or logs in (`/api/auth/register`, `/api/auth/login`).
2. Server issues JWT → stored securely on client.
3. Middleware validates JWT for protected routes.
4. `/api/auth/check` enables session persistence.
5. Logout clears JWT.

### Product/Shipment Flow
- CRUD endpoints (`/api/products`, `/api/shipments`).
- Calculated fields (e.g., `totalValue = quantity × unitPrice`, `cost = weight × distance`).
- Ownership enforced via `createdBy: userId`.

---

## 4. Frontend Design

### Key Decisions
- **Framework:** Next.js (React + TypeScript) for modular UI and SSR support.
- **UI Library:** ShadCN/UI for consistent styling.
- **State Management:** Redux Toolkit for authentication and product state.
- **Routing:** `react-router-dom` with guarded routes.
- **HTTP Client:** Axios with `withCredentials: true`.

### Authentication Flow
- On app load → dispatch `checkAuth`.
- While checking → loading spinner shown.
- If valid → redirect to dashboard.
- If invalid → redirect to login.
- Logout → clears state & cookie, redirects to login.

### Products Page
- Lists all products with pagination and filters.
- Modal form for create/update.
- Async thunks for CRUD operations.
- Calculated field (`totalValue`) displayed in UI.
- Logout button integrated into page header.

---

## 5. AI-Powered Chatbot

### Design
- Route: `POST /api/analytics/chatbot`.
- Input: `{ "prompt": "…" }`.
- Flow:
  1. Auth middleware validates user.
  2. Fetch products belonging to the user.
  3. Combine prompt + product data → context for Gemini.
  4. Gemini generates concise response.
  5. Return `{ "reply": "…" }`.

### Rationale
- Provides natural language access to structured data.
- Ensures privacy → only user’s own products are exposed to the model.
- Demonstrates effective use of AI in logistics/inventory use case.

---

## 6. Key Trade-offs
- **Time vs. Completeness:** Focused on core features (auth + CRUD + AI) over advanced validations.
- **Services Layer:** Controllers handle most logic directly for simplicity.
- **UI Complexity:** Minimal but functional (no over-engineering UI states).
- **AI Integration:** Simple prompt-based flow rather than fine-tuned reasoning engine.

---

## 7. Future Improvements
- Add role-based access (admin vs user).
- Add more entities (orders, shipments, invoices).
- Richer AI chatbot (multi-turn conversations, product recommendations).
- More filters & sorting in frontend.
- Dockerized deployment.
- Unit & integration test coverage.

---
