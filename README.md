# 📝 User Authentication & Task Manager CRUD App (MERN Stack)

This project is a **full-stack task management web application** built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. It features **JWT-based user authentication** and allows users to perform full CRUD operations on tasks.

---

## 🚀 Features

### ✅ User Authentication (JWT)
- **Signup**: Create account with name, email, and password
- **Login**: Login with registered email and password
- **Logout**: Frontend-only logout
- **Protected Routes**: Only authenticated users can access task routes (both frontend and backend)

### ✅ Task Management (CRUD)
Each task contains:
- `title` (required)
- `description`
- `status` (pending | in progress | completed)

**API Endpoints**:
- `POST /api/tasks` – Create a task
- `GET /api/tasks` – Get all tasks for logged-in user
- `PUT /api/tasks/:id` – Update a task
- `DELETE /api/tasks/:id` – Delete a task

### ✅ Frontend UI
- Built with **React** and styled using **Tailwind CSS** (or Bootstrap)
- Responsive design for all screens
- Clean dashboard for managing tasks
- Toast notifications for actions (success/failure)

---

## 🧰 Tech Stack


- Frontend     React.js, Axios, Bootstrap, React Router 
- Backend      : Node.js, Express.js       
- Authentication :  JWT (JSON Web Token)    
- Database     :  MongoDB with Mongoose     
- Form Validation : React Hook Form or Custom Validation 

---

## 📂 Project Structure

```task/
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── server.js
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ └── App.js
```
---

## ⚙️ Setup Instructions

### 🔧 Backend Setup

```bash
cd backend
npm install

- Create a .env file in the backend/ folder:PORT=5000
  MONGO_URI=your_mongodb_atlas_connection_string
  JWT_SECRET=your_secret_key

- Then run the server:

  npm start
```

### 🎨 Frontend Setup

```
cd frontend
npm install

- To start the frontend server:
   npm start

```

## 📸 Screenshots

---

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| POST   | `/api/users/signup` | Register new user    |
| POST   | `/api/users/login`  | Login user           |
| GET    | `/api/tasks`        | Get all tasks (auth) |
| POST   | `/api/tasks`        | Create new task      |
| PUT    | `/api/tasks/:id`    | Update task          |
| DELETE | `/api/tasks/:id`    | Delete task          |

---

###🙌 Acknowledgements

- MongoDB
- Express.js
- React.js
- Node.js
- JWT
