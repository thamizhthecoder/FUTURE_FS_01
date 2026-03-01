# Personal Professional Portfolio (Frontend)

This is the frontend component of my **Full Stack Web Development Task 1: Personal Professional Portfolio Website**. 

This portfolio acts as my digital resume and proof-of-work, designed to showcase my skills, tech stack, and the full-stack projects I have built. It provides a clean, responsive, and professional user experience for recruiters, clients, and hiring managers.

## 🎯 Objective
Create a clean, responsive, and professional portfolio website that showcases:
*   My skills and tech stack
*   Projects I have built (including Future Interns tasks)
*   My background, interests, and goals
*   A clear way for people to contact me

## ✨ Key Features
*   **Interactive UI**: Dynamic and modern user interface built with React.
*   **Responsive Design**: Fully optimized to work seamlessly on both mobile devices and desktop screens.
*   **Project Showcase**: Dedicated section highlighting my work and case studies.
*   **Contact Form**: Functional contact section allowing visitors to send messages that are processed by the Node.js backend.
*   **Professional Aesthetics**: Clean layout drawing inspiration from modern design platforms (Dribbble, Behance).

## 🛠️ Tech Stack & Architecture

This repository contains the **Frontend** portion of the application.

*   **Framework**: React.js (Vite)
*   **Styling**: CSS / Tailwind 
*   **Backend Integration**: Native `fetch`/`axios` calls to the accompanying [Node.js server-v2 backend](../server-v2) which handles contact form messages and dynamic content.

## 🚀 Setup & Execution

To run this frontend interface locally, ensure you have Node.js installed.

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   *The application will launch on your local host (typically `http://localhost:5173`).*

## 🌐 Deploying to Vercel

This frontend project is deployed as part of the full `FUTURE_FS_01` monorepo.
Please see the **[Root README](../README.md)** for the exact configuration steps to deploy the frontend and backend together on Vercel using the provided `vercel.json` routing rules.

---
*Built for the Future Interns Full Stack Web Development Curriculum.*
