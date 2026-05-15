import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App';

import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ==========================================================
// ASSIGNMENT 13
// MERN-BASED TASK MANAGEMENT APPLICATION
// ==========================================================


// ==========================================================
// AIM
// ==========================================================

// Deploy a MERN-based Task Management System where
// users can:
// 1. Create Tasks
// 2. View Tasks
// 3. Delete Tasks

// Technologies Used:
// React + Express + MongoDB + Node.js + AWS EC2


// ==========================================================
// PROJECT FLOW
// ==========================================================

// React Frontend
// ↓
// Express + Node Backend API
// ↓
// MongoDB Database
// ↓
// AWS EC2 Deployment


// ==========================================================
// GITHUB STRUCTURE
// ==========================================================

/*

Assignment13
│
├── client
│   ├── src
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
│
├── server
│   ├── models
│   │   └── Task.js
│   ├── routes
│   │   └── taskRoutes.js
│   ├── package.json
│   └── server.js

*/


// ==========================================================
// STEP 0
// CREATE GITHUB FILES
// ==========================================================

// Create first file:

// Assignment13/client/src/App.js

// GitHub automatically creates:
// Assignment13
// client
// src

// Then create:

// Assignment13/client/src/App.css
// Assignment13/client/src/index.js

// Go back to client folder and create:

// Assignment13/client/package.json

// Then create backend:

// Assignment13/server/server.js
// Assignment13/server/package.json
// Assignment13/server/models/Task.js
// Assignment13/server/routes/taskRoutes.js


// ==========================================================
// STEP 1
// App.js CODE
// ==========================================================

/*

import React, { useEffect, useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {

    fetch('http://YOUR_PUBLIC_IP:5000/api/tasks')

      .then((res) => res.json())

      .then((data) => setTasks(data));

  }, []);

  const addTask = async () => {

    const response = await fetch('http://YOUR_PUBLIC_IP:5000/api/tasks', {

      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({ title })

    });

    const data = await response.json();

    setTasks([...tasks, data]);

    setTitle('');
  };

  const deleteTask = async (id) => {

    await fetch(`http://YOUR_PUBLIC_IP:5000/api/tasks/${id}`, {
      method: 'DELETE'
    });

    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (

    <div className="container">

      <h1>Task Management System</h1>

      <div className="task-input">

        <input
          type="text"
          placeholder="Enter Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={addTask}>
          Add Task
        </button>

      </div>

      <div className="tasks">

        {tasks.map((task) => (

          <div className="card" key={task._id}>

            <h2>{task.title}</h2>

            <button onClick={() => deleteTask(task._id)}>
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>

  );
}

export default App;

*/


// ==========================================================
// STEP 2
// App.css CODE
// ==========================================================

/*

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f172a;
  color: white;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 1000px;
  margin: auto;
  padding: 40px;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
}

.task-input {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
}

.task-input input {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 8px;
}

button {
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background: #2563eb;
  color: white;
  cursor: pointer;
}

.tasks {
  display: grid;
  gap: 20px;
}

.card {
  background: #1e293b;
  padding: 20px;
  border-radius: 12px;
}

*/


// ==========================================================
// STEP 3
// index.js CODE
// ==========================================================

/*

import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App';

import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

*/


// ==========================================================
// STEP 4
// client/package.json
// ==========================================================

/*

{
  "name": "client",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start"
  }
}

*/


// ==========================================================
// STEP 5
// Task.js CODE
// ==========================================================

/*

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({

  title: String

});

module.exports = mongoose.model('Task', taskSchema);

*/


// ==========================================================
// STEP 6
// taskRoutes.js CODE
// ==========================================================

/*

const express = require('express');

const router = express.Router();

const Task = require('../models/Task');

router.get('/', async (req, res) => {

  const tasks = await Task.find();

  res.json(tasks);

});

router.post('/', async (req, res) => {

  const task = new Task({
    title: req.body.title
  });

  await task.save();

  res.json(task);

});

router.delete('/:id', async (req, res) => {

  await Task.findByIdAndDelete(req.params.id);

  res.json({
    message: 'Task Deleted'
  });

});

module.exports = router;

*/


// ==========================================================
// STEP 7
// server.js CODE
// ==========================================================

/*

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/taskDB')
.then(() => console.log('MongoDB Connected'));

const taskRoutes = require('./routes/taskRoutes');

app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.send('Backend Running');
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

*/


// ==========================================================
// STEP 8
// server/package.json
// ==========================================================

/*

{
  "name": "server",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "mongoose": "^8.0.0"
  }
}

*/


// ==========================================================
// STEP 9
// REPLACE PUBLIC IP
// ==========================================================

// Inside App.js replace:

// YOUR_PUBLIC_IP

// with actual EC2 public IP.

// Example:

// http://98.82.187.249:5000/api/tasks


// ==========================================================
// STEP 10
// OPEN TERMINAL
// ==========================================================

/*

cd ~/Downloads

*/


// ==========================================================
// STEP 11
// GIVE PEM PERMISSION
// ==========================================================

/*

chmod 400 lp2.pem

*/


// ==========================================================
// STEP 12
// CONNECT TO EC2
// ==========================================================

/*

ssh -i lp2.pem ubuntu@YOUR_PUBLIC_IP

*/


// ==========================================================
// STEP 13
// UPDATE UBUNTU
// ==========================================================

/*

sudo apt update

*/


// ==========================================================
// STEP 14
// INSTALL GIT
// ==========================================================

/*

sudo apt install git -y

*/


// ==========================================================
// STEP 15
// INSTALL NODE + npm
// ==========================================================

/*

sudo apt install nodejs npm -y

*/


// ==========================================================
// STEP 16
// INSTALL MONGODB
// ==========================================================

/*

sudo apt install mongodb -y

*/


// ==========================================================
// STEP 17
// START MONGODB
// ==========================================================

/*

sudo systemctl start mongodb

*/


// ==========================================================
// STEP 18
// ENABLE MONGODB
// ==========================================================

/*

sudo systemctl enable mongodb

*/


// ==========================================================
// STEP 19
// REMOVE OLD REPO
// ==========================================================

/*

sudo rm -rf LP2

*/


// ==========================================================
// STEP 20
// CLONE UPDATED REPO
// ==========================================================

/*

git clone https://github.com/joshitanisha/LP2.git

*/


// ==========================================================
// STEP 21
// OPEN BACKEND FOLDER
// ==========================================================

/*

cd LP2/Assignment13/server

*/


// ==========================================================
// STEP 22
// INSTALL BACKEND DEPENDENCIES
// ==========================================================

/*

npm install

*/


// ==========================================================
// STEP 23
// RUN BACKEND SERVER
// ==========================================================

/*

node server.js

*/


// Expected Output:

// MongoDB Connected
// Server running on port 5000


// ==========================================================
// STEP 24
// OPEN NEW TERMINAL
// ==========================================================

// Backend must keep running.


// ==========================================================
// STEP 25
// CONNECT TO EC2 AGAIN
// ==========================================================

/*

ssh -i lp2.pem ubuntu@YOUR_PUBLIC_IP

*/


// ==========================================================
// STEP 26
// OPEN FRONTEND FOLDER
// ==========================================================

/*

cd LP2/Assignment13/client

*/


// ==========================================================
// STEP 27
// INSTALL FRONTEND DEPENDENCIES
// ==========================================================

/*

npm install

*/


// ==========================================================
// STEP 28
// RUN REACT FRONTEND
// ==========================================================

/*

npm start

*/


// ==========================================================
// STEP 29
// OPEN WEBSITE
// ==========================================================

// Browser:

// http://YOUR_PUBLIC_IP:3000


// ==========================================================
// STEP 30
// VERIFY DATABASE
// ==========================================================

/*

mongo

use taskDB

db.tasks.find()

*/


// ==========================================================
// IMPORTANT VIVA QUESTIONS
// ==========================================================

// What is MERN?
// MongoDB Express React Node

// What is MongoDB?
// NoSQL database

// What is API?
// Communication between frontend and backend

// What is CRUD?
// Create Read Update Delete

// Why Port 3000?
// React frontend

// Why Port 5000?
// Backend API

// What is Deployment?
// Making application accessible online


// ==========================================================
// AFTER COMPLETION
// ==========================================================

// AWS Console → EC2 → Instances

// Instance State → Stop Instance

// Do NOT terminate instance
