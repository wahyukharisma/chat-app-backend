# Chat App Backend

## 📌 Overview
The **Chat App Backend** is a Node.js-based server that provides real-time messaging capabilities using **Express.js** and **Socket.io**. It is built with PostgreSQL as the database and follows best practices for authentication, security, and scalability.

## 🚀 Features
- 🔄 **Real-time messaging** using WebSockets (Socket.io)
- 🔑 **User authentication & authorization** (JWT-based)
- 🗃️ **PostgreSQL database** for storing user and chat data
- 📄 **RESTful API** for user management and chat history retrieval
- 🛠️ **Environment-based configuration** using `.env`
- 🛡️ **Secure communication** with input validation & encryption

## 🏗️ Tech Stack
- **Node.js** (Runtime Environment)
- **Express.js** (Web Framework)
- **Socket.io** (Real-time Communication)
- **PostgreSQL** (Database)
- **Sequelize** (ORM for PostgreSQL)
- **JWT** (Authentication)
- **dotenv** (Environment Variables Management)

## 📂 Project Structure
```
├── src
│   ├── config        # Configuration files
│   ├── controllers   # Request handlers
│   ├── models        # Database models (Sequelize)
|   ├── middlewares   # Authentication validation
│   ├── routes        # API routes
│   ├── services      # Business logic & database queries
│   ├── cron          # Cron job function
│   ├── utils         # Utility functions
│   ├── index.js      # Server entry point
├── .env              # Environment variables
├── package.json      # Dependencies & scripts
├── README.md         # Project documentation
```

## ⚙️ Installation & Setup
### 1️⃣ Clone the repository
```sh
git clone https://github.com/wahyukharisma/chat-app-backend.git
cd chat-app-backend
```
### 2️⃣ Install dependencies
```sh
npm install
```
### 3️⃣ Configure environment variables
Create a `.env` file and add:
```env
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=chatdb
JWT_SECRET=your_secret_key
```

### Database structure

<img width="508" alt="image" src="https://github.com/user-attachments/assets/fdfbaf58-81d4-4cb4-bd44-f7eaf49d873f" />


## 🛠️ Development
### Run the server in development mode:
```sh
npm run dev
```

🚀 Happy coding!
