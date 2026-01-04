# LJ University Lost & Found

A simple, clean, and role-based **Campus Lost & Found web application** designed for **Lok Jagruti Kendra University (LJU)**. The system allows students to browse lost items without authentication, while authorized staff can securely manage items.

---

## 📸 Project Screenshots

### Landing Page (Role Selection)

Students can continue without login, while authorities authenticate using a secure password.

![Landing Page – Authority & Student Access](./screenshots/landing-page.png)

### Student View – Lost Items Dashboard

Students can browse available lost items and see the total count at a glance.

![Student Dashboard – Lost Items](./screenshots/student-dashboard.png)

> *Note: Replace the image paths above with the actual screenshot paths in your repository (e.g., `screenshots/landing-page.png`).*

---

## 🎯 Project Objective

The goal of this project is to **digitize the campus lost and found process** by:

* Reducing manual record keeping
* Making lost items easily discoverable for students
* Giving authorities a controlled interface to manage items

This project is especially suitable for **college-level deployment** and **academic evaluation**.

---

## 👥 User Roles

### 1. Student

* No login required
* Can browse all lost items
* Can view item details and designated collection location

### 2. Authority (Admin)

* Password-protected access
* Can add new lost items
* Can upload item images
* Can mark items as collected
* Can delete items from the system

---

## ✨ Key Features

* Role-based access (Student / Authority)
* Clean and responsive UI
* Lost item listing with count display
* Image-based item records
* Secure authority login
* Logout functionality

---

## 🛠️ Tech Stack

### Frontend

* React.js
* CSS Modules
* React Icons

### Backend 

* Node.js
* Express.js
* MongoDB
* Multer (for image uploads)

---

## 📂 Project Structure (Typical)

```
lj-lost-and-found/
│
├── frontend/              # React frontend
│   ├── pages/
│   ├── components/
│   ├── styles/
│   └── App.jsx
│
├── backend/              # Backend API
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
│
├── README.md
└── package.json
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/LjLostAndFound.git
```

### 2. Install Dependencies

Frontend:

```bash
cd client
npm install
npm run dev
```

Backend:

```bash
cd server
npm install
npm start
```

---

## 🔐 Authority Login

* Authority access is protected via a predefined password
* Password validation is handled securely on the backend

> *For demo or academic purposes, the password can be hardcoded or stored in environment variables.*

---

## 📈 Future Enhancements

* Search and filter lost items
* Email or SMS notification system
* Claim request workflow for students
* Role-based authentication using JWT
* Admin dashboard analytics

---

## 🏫 Institution

**Lok Jagruti Kendra University**
*University with a Difference*

---

## 📄 License

This project is developed for **educational purposes**. You are free to modify and extend it for learning or institutional use.

---

## 🙌 Acknowledgements

* LJU Faculty & Mentors
* Open-source community
* React & Node.js ecosystem
