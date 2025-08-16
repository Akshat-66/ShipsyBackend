# 🏗 Architecture Documentation  

## Backend Architecture  

The backend follows a **layered architecture** using Node.js, Express, and MongoDB with Mongoose ORM.  
This ensures clear separation of concerns, scalability, and maintainability.  

### Layers  

- **Routes (`/routes`)**  
  - `auth.route.js`: Authentication endpoints (`/api/auth`) → login/register.  
  - `ship.route.js`: Shipment CRUD endpoints (`/api/shipments`).  

- **Controllers (`/controllers`)**  
  - `auth.controller.js`: Handles login/registration logic, generates JWTs.  
  - `shipment.controller.js`: Implements CRUD logic for shipments (create, read, update, delete).  

- **Middleware (`/middleware`)**  
  - `auth.middleware.js`: JWT validation → ensures only authenticated users can access protected routes.  

- **Models (`/models`)**  
  - `user.model.js`: Defines user schema for authentication.  
  - `shipment.model.js`: Defines shipment schema, includes a **calculated field** (`cost = weight × distance`).  

- **Config (`/config`)**  
  - `db.js`: MongoDB connection setup.  

- **Other**  
  - `seed/seed.js`: Inserts sample data for testing.  
  - `swagger.js` + `swagger.json`: API documentation using Swagger.  
  - `server.js`: Express server entry point.  

---

## Frontend Architecture  

The frontend is built with **Next.js (React + TypeScript)** and **ShadCN/UI** for modular components.  
It follows a **feature-first structure** for scalability.  

### Directory Structure  

- **`/app`**  
  - `login/page.jsx`: Login page.  
  - `api/`: Next.js API routes (`chat`, `bot/advanced`).  

- **`/components`**  
  - `ui/`: Reusable UI components (button, table, pagination, toast, etc.).  
  - `shipment-form.jsx`: Form to create/update shipments.  
  - `auth-guard.jsx`: Protects pages from unauthorized access.  
  - `ai-chatbot.jsx`: AI chatbot component for feedback.  

- **`/hooks`**  
  - `use-toast.ts`, `use-mobile.ts`: Custom React hooks.  

- **`/lib`**  
  - Bot memory and feedback processing (`feedback-processor.js`, `memory-manager.js`).  

- **`/docs`**  
  - Contains bot architecture documentation.  

- **`/styles/globals.css`**  
  - Global CSS and theme configuration.  

---

## Authentication Flow  

1. **User Login/Register** → Calls `/api/auth/login` or `/api/auth/register`.  
2. **JWT Issued** → Backend returns a signed JWT stored in client (httpOnly cookie or local storage).  
3. **Protected Routes** → `auth.middleware.js` validates JWT before granting access.  
4. **Frontend Guard** → `auth-guard.jsx` restricts pages if user is not authenticated.  
5. **Logout** → Clears JWT + redirects to login.  

---

## Database Schema  

### User Model  

| Field     | Type     | Constraints            | Description                   |
|-----------|----------|------------------------|-------------------------------|
| _id       | ObjectId | Auto-generated         | Primary key                   |
| username  | String   | Required, unique       | User identifier               |
| email     | String   | Required, unique       | Authentication & communication|
| password  | String   | Required, hashed       | Secure storage of password    |
| createdAt | Date     | Auto-generated         | Account creation timestamp    |

### Shipment Model  

| Field      | Type     | Constraints                  | Description                         |
|------------|----------|------------------------------|-------------------------------------|
| _id        | ObjectId | Auto-generated               | Primary key                         |
| title      | String   | Required                     | Shipment title/description          |
| status     | Enum     | [Pending, In-Transit, Delivered] | Current status of shipment      |
| isFragile  | Boolean  | Default: false               | Whether the shipment is fragile     |
| weight     | Number   | Required, min 0              | Weight of shipment                  |
| distance   | Number   | Required, min 0              | Distance in kilometers              |
| cost       | Number   | Calculated (weight × distance) | Derived field for shipment cost |
| createdBy  | ObjectId | Ref: User                    | Links shipment to user              |
| createdAt  | Date     | Auto-generated               | Creation timestamp                  |

---

## Technology Stack & Rationale  

- **Backend:** Node.js + Express (lightweight REST API framework).  
- **Database:** MongoDB with Mongoose (flexible schema, easy CRUD).  
- **Auth:** JWT for stateless authentication.  
- **Frontend:** Next.js + React + TypeScript (scalable, typed, and optimized for SSR).  
- **UI Library:** ShadCN/UI (modern, reusable components).  
- **Documentation:** Swagger (API docs).  
- **Hosting:** Backend on Render/Railway, Frontend on Vercel.  

---
