# Future Intern Portfolio

A professional full-stack portfolio website built with React, Vite, Framer Motion, and a lightweight Node.js/Express backend.

## Project Structure
- `portfolio-v2`: Frontend React application
- `server-v2`: Backend Node.js Express server using local JSON files as a mock database

## Running Locally

### 1. Start the Backend Server
```bash
cd ../server-v2
npm install
npm start
```
The server will run on `http://localhost:5000`

### 2. Start the Frontend Application
```bash
cd ../portfolio-v2
npm install
npm run dev
```
The frontend will typically run on `http://localhost:5173`

## Features
- **Dynamic Projects**: Fetched actively from the backend JSON store
- **Blog Section**: Fetched from the backend
- **Functional Contact Form**: Stores incoming messages directly to the backend
- **Sleek UI**: Modern glassmorphism aesthetics powered by Framer Motion and Lucide React icons
