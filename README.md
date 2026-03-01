# Full Stack Web Development Task 1: Personal Professional Portfolio

Welcome to the **FUTURE_FS_01** repository! This project contains my first task built for the Future Interns Full Stack Web Development track.

This repository encompasses a complete **Personal Professional Portfolio Website**. It serves as a digital resume and a centralized hub to showcase my skills, projects (including Future Interns tasks), and professional background to recruiters, clients, and hiring managers.

## 📁 Repository Structure

The project has been architected as a decoupled Full-Stack application, separated into two distinct directories:

*   [`/portfolio-v2`](./portfolio-v2): The modern, interactive React (Vite) **Frontend**.
*   [`/server-v2`](./server-v2): The lightweight Node.js/Express **Backend** that manages dynamic data (contact messages, projects, blogs) via the local file system.

## ✨ Key Features

*   **Interactive UI**: A dynamic, professional frontend interface built with React.
*   **Fully Responsive**: Styled seamlessly for both mobile devices and desktop views.
*   **Case Study Showcase**: Dedicated sections to highlight built projects and technical depth.
*   **Functional Contact Form**: A working contact page that securely captures and saves visitor messages to the backend API.
*   **Zero-Database Backend**: A custom Node.js backend acting as the data layer without the complexity or overhead of external databases (using native JSON files).

## 🚀 Getting Started

To run the complete portfolio on your local machine, you will need to boot both the frontend and backend servers.

### 1. Start the Backend API
Open a terminal and navigate to the backend directory:
```bash
cd server-v2
npm install
npm run start # or node server.js
```
*(The backend runs on http://localhost:5000)*

### 2. Start the Frontend Application
Open a **new terminal** alongside the backend process:
```bash
cd portfolio-v2
npm install
npm run dev
```
*(The frontend automatically connects to the local backend and serves over http://localhost:5173)*

## 🛠️ Complete Tech Stack

*   **Frontend**: React (Vite), Tailwind CSS, React Router DOM, Framer Motion
*   **Backend**: Node.js, Express, CORS
*   **Storage**: Native JSON File System 

---
