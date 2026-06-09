# 🔐 MERN Authentication System

A secure full-stack authentication system built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). This project provides user registration, login, password encryption, JWT-based authentication, and protected routes.

## 🚀 Live Demo

* Frontend: https://mern-authentication-system-phi.vercel.app
* Backend API: https://mern-authentication-system-gii8.onrender.com

---

## 📌 Features

✅ User Registration

✅ User Login

✅ Password Hashing using bcryptjs

✅ JWT Authentication

✅ Protected Routes

✅ MongoDB Atlas Integration

✅ RESTful APIs

✅ Responsive User Interface

✅ Secure User Data Storage

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT (JSON Web Token)
* bcryptjs

### Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas (Database)

---

## 📂 Project Structure

```text
MERN-Authentication-System
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── config
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── .env
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/Suhanimaurya7575/MERN-Authentication-System.git
cd MERN-Authentication-System
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

## 🔑 Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 🔒 Authentication Flow

1. User registers with details.
2. Password is encrypted using bcryptjs.
3. User logs in with valid credentials.
4. JWT token is generated.
5. Protected routes verify JWT token before granting access.

---



## 🎯 Learning Outcomes

* MERN Stack Development
* REST API Development
* JWT Authentication
* Password Security
* Full Stack Deployment

---

## 👩‍💻 Author

**Suhani Maurya**

---


