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
// ASSIGNMENT 11
// Deployment of E-Commerce Web Application (Full MERN)
// ==========================================================


// ==========================================================
// AIM
// ==========================================================

// Deploy a MERN-based E-Commerce application on AWS EC2
// where users can browse products and simulate purchase.


// ==========================================================
// TECHNOLOGIES USED
// ==========================================================

// MongoDB  -> Database
// Express  -> Backend Framework
// React    -> Frontend
// Node.js  -> Runtime Environment
// AWS EC2  -> Cloud Deployment
// GitHub   -> Code Hosting


// ==========================================================
// PROJECT FLOW
// ==========================================================

// React Frontend
// ↓
// Express + Node Backend
// ↓
// MongoDB Database
// ↓
// AWS EC2 Deployment


// ==========================================================
// GITHUB STRUCTURE
// ==========================================================

/*

Assignment11
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
│   │   └── Product.js
│   ├── routes
│   │   └── productRoutes.js
│   ├── server.js
│   └── package.json

*/


// ==========================================================
// STEP 0
// Launch EC2 Instance
// ==========================================================

// AWS Console → EC2 → Launch Instance

// Name:
// Assignment11

// AMI:
// Ubuntu

// Instance Type:
// t2.micro

// Create Key Pair:
// lp2.pem

// Allow Ports:
// 22   -> SSH
// 80   -> HTTP
// 3000 -> React Frontend
// 5000 -> Backend API

// Launch Instance


// ==========================================================
// STEP 1
// Copy Public IPv4 Address
// ==========================================================

// Example:
// 98.82.187.249


// ==========================================================
// STEP 2
// Open Terminal
// ==========================================================

/*

cd ~/Downloads

*/


// ==========================================================
// STEP 3
// Check PEM File
// ==========================================================

/*

ls

*/


// ==========================================================
// STEP 4
// Give Permission To PEM
// ==========================================================

/*

chmod 400 lp2.pem

*/


// ==========================================================
// STEP 5
// Connect To EC2 Using SSH
// ==========================================================

/*

ssh -i lp2.pem ubuntu@98.82.187.249

*/


// ==========================================================
// STEP 6
// Update Ubuntu Packages
// ==========================================================

/*

sudo apt update

*/


// ==========================================================
// STEP 7
// Install Git
// ==========================================================

/*

sudo apt install git -y

*/


// ==========================================================
// STEP 8
// Install Node.js and npm
// ==========================================================

/*

sudo apt install nodejs npm -y

*/


// ==========================================================
// STEP 9
// Check Node Version
// ==========================================================

/*

node -v

*/


// ==========================================================
// STEP 10
// Install MongoDB
// ==========================================================

/*

sudo apt install mongodb -y

*/


// ==========================================================
// STEP 11
// Start MongoDB
// ==========================================================

/*

sudo systemctl start mongodb

*/


// ==========================================================
// STEP 12
// Enable MongoDB
// ==========================================================

/*

sudo systemctl enable mongodb

*/


// ==========================================================
// STEP 13
// Clone GitHub Repository
// ==========================================================

/*

git clone https://github.com/joshitanisha/LP2.git

*/


// ==========================================================
// STEP 14
// Open Backend Folder
// ==========================================================

/*

cd LP2/Assignment11/server

*/


// ==========================================================
// STEP 15
// Install Backend Dependencies
// ==========================================================

/*

npm install

*/


// ==========================================================
// STEP 16
// Run Backend Server
// ==========================================================

/*

node server.js

*/


// Expected Output:

// MongoDB Connected
// Server running on port 5000


// ==========================================================
// STEP 17
// Insert Products Into MongoDB
// ==========================================================

// Open another terminal

/*

ssh -i lp2.pem ubuntu@98.82.187.249

*/


// Open Mongo Shell

/*

mongo

*/


// Use Database

/*

use ecommerceDB

*/


// Insert Products

/*

db.products.insertMany([
  {
    name: "Nike Shoes",
    price: 120,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000"
  },
  {
    name: "Smart Watch",
    price: 80,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000"
  }
])

*/


// ==========================================================
// STEP 18
// Open Frontend Folder
// ==========================================================

// Open another terminal

/*

ssh -i lp2.pem ubuntu@98.82.187.249

*/


/*

cd LP2/Assignment11/client

*/


// ==========================================================
// STEP 19
// Install Frontend Dependencies
// ==========================================================

/*

npm install

*/


// ==========================================================
// STEP 20
// Run React Frontend
// ==========================================================

/*

npm start

*/


// ==========================================================
// STEP 21
// Open Website
// ==========================================================

// Browser:

// http://98.82.187.249:3000


// ==========================================================
// STEP 22
// Test Backend API
// ==========================================================

// Browser:

// http://98.82.187.249:5000/api/products


// ==========================================================
// WHAT TO SHOW EXTERNAL
// ==========================================================

// 1. React Frontend
// 2. Product Cards
// 3. Buy Buttons
// 4. Backend API
// 5. MongoDB Database
// 6. EC2 Deployment


// ==========================================================
// DATABASE VERIFICATION
// ==========================================================

/*

mongo

show dbs

use ecommerceDB

show collections

db.products.find()

*/


// ==========================================================
// IMPORTANT VIVA QUESTIONS
// ==========================================================

// What is MERN?
// MongoDB Express React Node

// What is MongoDB?
// NoSQL database

// What is Express?
// Backend framework for Node.js

// What is React?
// Frontend JavaScript library

// What is API?
// Communication layer between frontend and backend

// Why Port 3000?
// React frontend

// Why Port 5000?
// Backend API

// What is CRUD?
// Create Read Update Delete

// What is Deployment?
// Making application accessible online


// ==========================================================
// AFTER COMPLETION
// ==========================================================

// AWS Console → EC2 → Instances

// Instance State → Stop Instance

// Do NOT terminate instance
