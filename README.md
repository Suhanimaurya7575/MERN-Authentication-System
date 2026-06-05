# MERN Authentication System

A full-stack authentication application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The project provides secure user registration, login, authentication, and protected profile access using JSON Web Tokens (JWT).

---

## Features

* User Registration
* User Login
* Secure Password Hashing with bcryptjs
* JWT-Based Authentication
* Protected API Routes
* User Profile Retrieval
* MongoDB Database Integration
* React Frontend with Axios API Integration
* Token Management using Local Storage
* Authentication Middleware for Route Protection

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcryptjs

---

## Project Architecture

```text
Frontend (React)
       │
       ▼
Axios API Requests
       │
       ▼
Backend (Express.js)
       │
       ├── Authentication Routes
       ├── JWT Middleware
       └── MongoDB Database
```

---

## Authentication Flow

### Registration

1. User submits registration form.
2. Password is hashed using bcryptjs.
3. User data is stored in MongoDB.
4. JWT token is generated.
5. Token is returned to the client.

### Login

1. User enters email and password.
2. Credentials are verified.
3. JWT token is generated.
4. Token is stored in localStorage.
5. User is redirected to the dashboard.

### Protected Routes

1. Frontend sends JWT token in the Authorization header.
2. Authentication middleware verifies the token.
3. Authorized users can access protected resources.

---

## API Endpoints

### Authentication

| Method | Endpoint             | Description                    |
| ------ | -------------------- | ------------------------------ |
| POST   | `/api/auth/register` | Register a new user            |
| POST   | `/api/auth/login`    | Login user                     |
| GET    | `/api/auth/profile`  | Get authenticated user profile |

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the backend directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## Learning Outcomes

* REST API Development
* Authentication & Authorization
* JWT Implementation
* Password Security using bcryptjs
* MongoDB Integration
* React State Management
* Frontend-Backend Communication
* Protected Route Handling

---

## Future Improvements

* Form Validation
* Password Reset Functionality
* Role-Based Authentication
* Profile Image Upload
* Responsive UI Enhancements

---

## Author

**Suhani Maurya**

Built as a full-stack authentication project to demonstrate secure user management and MERN stack development skills.
