# React Job Listing App

A simple **Job Listing** web application built with **Vite**, **React**, **React Router**, and **Tailwind CSS**.  
It allows users to view job postings, read details, and add or delete jobs.  
Perfect for learning **CRUD operations** in React.

---

## 🚀 Features

- View all job listings
- View detailed job pages
- Add a new job listing
- Delete a job listing
- Fully responsive UI with Tailwind CSS
- Data fetched from a **local JSON server** (mock API)

---

## 🛠 Tech Stack

- **React** (Vite)
- **React Router DOM**
- **Tailwind CSS**
- **JSON Server** (fake REST API for development)
- **React Icons** (optional for UI icons)
- **React Toastify** (for notifications)

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/react-joblisting.git
cd react-joblisting



2️⃣ Install dependencies
bash
Copy
Edit
npm install
3️⃣ Start the JSON server (backend)
We use JSON Server to simulate a backend.

bash
Copy
Edit
# If you don't have JSON Server installed globally
npm install -g json-server

# Start the backend (on port 3001)
json-server --watch db.json --port 3001
db.json example:

json
Copy
Edit
{
  "jobs": [
    {
      "id": 1,
      "title": "Frontend Developer",
      "company": "Tech Corp",
      "location": "Remote",
      "description": "We are looking for a skilled frontend developer..."
    }
  ]
}
4️⃣ Start the React app
bash
Copy
Edit
npm run dev
📂 Project Structure
php
Copy
Edit
react-joblisting/
│── public/
│── src/
│   ├── components/     # Reusable UI components (Spinner, JobList, etc.)
│   ├── layouts/        # Main layout components
│   ├── pages/          # Page components (HomePage, JobsPage, JobPage, AddJobPage)
│   ├── App.jsx         # Main app with routes
│   ├── index.css       # Tailwind CSS entry
│   └── main.jsx        # Entry point
│── db.json             # Mock API data
│── package.json
│── README.md
│── tailwind.config.js
└── vite.config.js
⚡ Available Scripts
Command	Description
npm run dev	Start the development server
npm run build	Build for production
npm run preview	Preview the production build
json-server --watch db.json --port 3001	Start the mock API