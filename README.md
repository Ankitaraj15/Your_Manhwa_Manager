<h1 align="center">📚 Your Manhwa Manager</h1>
A full-stack web application to manage your favorite manhwas (comics)! This project was built for the Keploy API Fellowship to demonstrate API design, database integration, frontend development, and automated testing.

---

 ## 📁 Project Structure

Manhwa_collection_list_website/

├── manhwa-api-server/ # Node.js + Express backend with MongoDB

└── manhwa-frontend/ # React.js frontend for interacting with API

---

## ✨ Features

### 🔧 Custom API Endpoints

This project includes RESTful APIs for managing a manhwa collection:

| Method | Endpoint             | Description                      |
|--------|----------------------|----------------------------------|
| GET    | /api/manhwas       | Retrieve all manhwas             |
| POST   | /api/manhwas       | Add a new manhwa                 |
| PUT    | /api/manhwas/:id   | Update details of a manhwa       |
| DELETE | /api/manhwas/:id   | Remove a manhwa from collection  |

Each manhwa entry includes:
- title
- author
- status (Completed/Ongoing)

---

## 🗃 Database

- *MongoDB* was used as the backend database.
- Integrated using *Mongoose* ODM.
- Supports full CRUD operations via API.

---

## 🌍 Frontend

Developed using *React.js*, the frontend provides:

- A form to add new manhwas
- A table to list and manage existing entries
- Real-time updates after CRUD actions

---

## 🧪 Testing

Thorough tests were written for the API server:

### ✅ Unit Tests
- Focused on controller and model logic
- Used both *mocked* and *real* MongoDB environments

### ✅ Integration Tests
- Verified actual interactions with the MongoDB database

### ✅ API Tests
- Ensured that all routes behave correctly using supertest

### 🔍 Test Coverage

- Achieved over *70% test coverage*
- Calculated via Jest’s built-in coverage tool

### 📸 Coverage Screenshot

> Below is a screenshot of the code coverage report:

![Test Coverage Report]![test_manhwa_server](https://github.com/user-attachments/assets/6eaac0bd-9bb8-472a-a0fd-6847185e0697)


---

## 🛠 Tech Stack

| Layer      | Technology                |
|------------|---------------------------|
| Backend    | Node.js, Express.js       |
| Frontend   | React.js, Axios           |
| Database   | MongoDB, Mongoose         |
| Testing    | Jest, Supertest, MongoDB Memory Server |

---

## 🚀 How to Run Locally

### 🔙 Backend Setup

- cd manhwa-api-server
  npm install
(Create a .env file)

- MONGODB_URI=<your_mongodb_uri>
  PORT=5000
  
(Run the server)
- npm start
  
(To test)
- npm test
  
(To generate coverage)
- npm run test -- --coverage

  
### 💻 Frontend Setup
- cd manhwa-frontend
  npm install
  npm start
(The frontend connects to http://localhost:5000/api/manhwas by default.)

### 📬 Sample API Request
- POST /api/manhwas
  Content-Type: application/json
  {
    "title": "Solo Leveling",
    "author": "Chugong",
    "status": "Completed",
  }
  
### 📂 Repository
[🔗 GitHub Repository](https://github.com/Ankitaraj15/Manhwa_collection_list_website)

### 👩‍💻 Author
Ankita Raj
📧 ankitaraj.cse26@kiit.ac.in

This project was created as part of the API Fellowship by Keploy. It demonstrates real-world application development, testing best practices, and full-stack deployment from scratch.
Let me know if you want:
- The image path changed
- API schema auto-generated (e.g., Swagger)
- A deployed version link section  
- or the README broken into sections (README.md, API.md, TESTS.md, etc.)
