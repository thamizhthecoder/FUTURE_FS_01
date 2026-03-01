# Full Stack Web Development Task 1: Personal Professional Portfolio

Welcome to the **FUTURE_FS_01** repository! This project contains my first task built for the Future Interns Full Stack Web Development track.

This repository encompasses a complete **Personal Professional Portfolio Website**. It serves as a digital resume and a centralized hub to showcase my skills, projects (including Future Interns tasks), and professional background to recruiters, clients, and hiring managers.

## 📁 Repository Structure

The project has been architected as a decoupled Full-Stack application, separated into two distinct directories:

*   [`/portfolio-v2`](./portfolio-v2): The modern, interactive React (Vite) **Frontend**.
*   [`/api`](./api): The lightweight Node.js/Express **Backend** that manages dynamic data (contact messages, projects, blogs). This is configured as a Vercel Serverless Function.

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
cd api
npm install
npm run start
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

## 🌐 Deploying to Vercel (Monorepo Setup)

This repository is strictly configured to deploy as a monorepo on **Vercel** with zero `NOT_FOUND` errors.
The backend automatically compiles as a Vercel Serverless Function under the `/api` route, and the React Router DOM correctly handles SPA routing.

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New...** > **Project**.
2. Import this `FUTURE_FS_01` GitHub repository.
3. Keep the **Root Directory** as the repository root `FUTURE_FS_01` (Do NOT change it!).
4. Open the **Build and Output Settings** dropdown:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build` (This triggers the root package.json to build the frontend)
   - **Output Directory**: `portfolio-v2/dist`
5. Click **Deploy**!

---
*Built for the Future Interns Curriculum.*

## 🛠️ Complete Tech Stack

*   **Frontend**: React (Vite), Tailwind CSS, React Router DOM, Framer Motion
*   **Backend**: Node.js, Express, CORS
*   **Storage**: Native JSON File System

---
