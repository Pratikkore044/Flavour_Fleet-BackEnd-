🍽️ Flavour Fleet Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7E01D?style=for-the-badge&logo=javascript&logoColor=black)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Render](https://img.shields.io/badge/Deployed%20on-Render-3f7fca?style=for-the-badge&logo=render&logoColor=white)
![Railway](https://img.shields.io/badge/Compatible%20with-Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)


🧠 Overview

Flavour Fleet Backend powers the Flavour Fleet food ordering platform — managing users, menus, and orders with a secure and scalable REST API built on Node.js, Express, and MongoDB.

✨ Features

🔐 User registration and authentication

🍔 Fetch and display menu/restaurant data

🧾 Create and manage orders

⚡ RESTful API endpoints

🧩 MongoDB integration using Mongoose

⚙️ Installation

Clone the repository:

git clone https://github.com/yourusername/flavour-fleet-backend.git
cd flavour-fleet-backend


Install dependencies:

npm install


Setup environment variables:
Create a .env file in the project root and add:

MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key


Start the server:

npm start


Server runs at: http://localhost:5000

🚀 API Routes
Method	Endpoint	Description
POST	/api/createuser	Register a new user
POST	/api/loginuser	Login an existing user
GET	/api/displaydata	Fetch menu or restaurant data
POST	/api/orderdata	Create a new order
GET	/api/orderdata/:userId	Retrieve user order history
📁 Project Structure
Flavour-Fleet-Backend/
│
├── routes/
│   ├── CreateUser.js        # Handles user registration/login
│   ├── DisplayData.js       # Fetches restaurant/menu data
│   └── OrderData.js         # Handles order operations
│
├── models/
│   ├── User.js              # User schema
│   └── Order.js             # Order schema
│
├── db.js                    # MongoDB connection
├── index.js                 # Main server file
├── package.json             # Project dependencies
└── .gitignore

💻 Usage

Use Postman, Thunder Client, or cURL to test API endpoints.

Integrate with your frontend for a full-stack food delivery experience.

🌍 Deployment

Deploy your backend effortlessly using:

Render

Railway

Vercel (Serverless)
