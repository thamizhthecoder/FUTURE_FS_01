# Portfolio API Backend (server-v2)

This is the backend server for my **Full Stack Web Development Task 1: Personal Professional Portfolio Website**. 

It serves as the data layer for my modern portfolio, designed to manage API requests from the React frontend, such as contact form submissions and dynamic blog or project content.

## 🎯 Objective
Support a clean, responsive, and professional portfolio website by handling dynamic data interactions:
*   Securely capturing inbound contact messages from clients or recruiters.
*   Serving project details and future blog posts.

## 🛠️ Tech Stack & Architecture

This repository contains the **Backend** portion of the application. The backend handles the persistent data requests dynamically.

*   **Runtime**: Node.js
*   **Framework**: Express.js
*   **Database Alternative**: Natively reads and writes to local JSON files (`data/projects.json`, `data/blogs.json`, and `data/messages.json`) to fulfill the database requirements for contact form messages, project updates, and blog posts without the overhead of MongoDB/MySQL for a lightweight portfolio setup.

## 🚀 Setup & Execution

1. **Install Dependencies:**
   Ensure you have Node.js installed. Open a terminal in this `server-v2` folder.
   ```bash
   npm install
   ```

2. **Start the API Server:**
   Launch the backend data handler using Node:
   ```bash
   node server.js
   ```
   *The server expects to run on port `5000` to properly communicate with the frontend.*

## ✨ API Capabilities
*   **POST `/api/contact`**: Securely processes and stores inbound contact form messages directly into the local `messages.json` file.
*   **GET `/api/projects`**: Retreives the comprehensive list of portfolio projects.
*   **GET `/api/blogs`**: Retrieves current articles or blog posts for rendering on the frontend UI.

---
*Built for the Future Interns Full Stack Web Development Curriculum.*
