<div align="center">

# 🛒 Product CRUD API with MongoDB & MySQL

A **professional RESTful API** built with **Node.js** and **Express.js** that demonstrates **CRUD (Create, Read, Update, Delete)** operations using both **MongoDB (NoSQL)** and **MySQL (SQL)**.

This project highlights the implementation of the same business logic across two different database systems while following **MVC architecture**, clean coding principles, and REST API best practices.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

</div>

# 📌 Project Overview

This project demonstrates how to build a RESTful API that supports the complete **CRUD lifecycle** using two different database technologies:

- 🍃 **MongoDB** with **Mongoose**
- 🗄️ **MySQL** with **mysql2**

The primary objective is to compare SQL and NoSQL implementations while maintaining a clean, scalable, and consistent backend architecture.

---

This project was developed to compare the implementation of CRUD operations across SQL and NoSQL databases while maintaining a consistent API structure and clean project architecture.

---

# 📌 Project Objectives

- Build a RESTful API using **Express.js**
- Implement CRUD operations with **MongoDB**
- Implement equivalent CRUD operations with **MySQL**
- Compare SQL and NoSQL approaches
- Practice database connectivity and controller design
- Apply clean coding principles and MVC architecture

---

# 🚀 Technologies Used

| Technology | Purpose |
|------------|---------|
| Node.js | JavaScript Runtime |
| Express.js | Backend Framework |
| MongoDB | NoSQL Database |
| Mongoose | MongoDB ODM |
| MySQL | Relational Database |
| mysql2 | MySQL Driver |
| dotenv | Environment Variables |

---

# 📁 Project Structure

```
crud-mongodb-mysql/
│
├── config/
│   ├── mongodb.js
│   └── mysql.js
│
├── controllers/
│   ├── NoSQLcontroller.js
│   └── SQLcontroller.js
│
├── database/
│   └── schema.sql
│
├── middleware/
│   └── errorHandler.js
│
├── models/
│   └── Product.js
│
├── routes/
│   ├── mongo.routes.js
│   └── mysql.routes.js
│
├── .env
├── package.json
├── server.js
└── README.md
```

---

# 📦 Installation

## Clone the repository

```bash
git clone https://github.com/yourusername/crud-mongodb-mysql.git

cd crud-mongodb-mysql
```

---

## Install dependencies

```bash
npm install
```

---

# ⚙️ Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/productsDB

MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_DATABASE=productsdb
```

---

# 🗄️ Database Configuration

## MongoDB

Start the MongoDB server.

The application automatically creates the **productsDB** database after inserting the first product.

---

## MySQL

Start MySQL using **XAMPP**.

Create the database:

```sql
CREATE DATABASE productsdb;
```

Select the database:

```sql
USE productsdb;
```

Create the table:

```sql
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(255),
    inStock BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);
```

---

# ▶️ Running the Application

Start the server:

```bash
npm run dev
```

or

```bash
node server.js
```

If everything is configured correctly:

```
MongoDB Connected
Server running on port 5000
```

---

# 📌 API Endpoints

## MongoDB API

Base URL

```
/api/mongo
```

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /products | Create Product |
| GET | /products | Get All Products |
| GET | /products/:id | Get Product By ID |
| PUT | /products/:id | Update Product |
| DELETE | /products/:id | Delete Product |

---

## MySQL API

Base URL

```
/api/mysql
```

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /products | Create Product |
| GET | /products | Get All Products |
| GET | /products/:id | Get Product By ID |
| PUT | /products/:id | Update Product |
| DELETE | /products/:id | Delete Product |

---

# 📄 Product Model

## MongoDB Schema

```javascript
{
    name: String,
    price: Number,
    category: String,
    inStock: Boolean
}
```

---

## MySQL Table

| Column | Type |
|---------|------|
| id | INT |
| name | VARCHAR(255) |
| price | DECIMAL(10,2) |
| category | VARCHAR(255) |
| inStock | BOOLEAN |

---

# 📤 Sample Request

```json
{
    "name": "Gaming Keyboard",
    "price": 89.99,
    "category": "Accessories",
    "inStock": true
}
```

---

# 📥 Sample Response

```json
{
    "success": true,
    "message": "Product created successfully.",
    "data": {
        "_id": "688f3d...",
        "name": "Gaming Keyboard",
        "price": 89.99,
        "category": "Accessories",
        "inStock": true
    }
}
```

---

# ✅ Features

- Express REST API
- MongoDB CRUD Operations
- MySQL CRUD Operations
- Mongoose Schema Validation
- Parameterized SQL Queries
- MVC Architecture
- Environment Variables
- Global Error Handling
- JSON Responses
- HTTP Status Codes
- Async/Await Implementation
- Secure Database Connections

---

# 🔒 Error Handling

The application includes centralized error handling middleware that returns consistent JSON responses.

Example:

```json
{
    "success": false,
    "message": "Product not found."
}
```

---

# 🧪 Testing

The API can be tested using:

- Postman
- Thunder Client (VS Code)
- Insomnia

---

# 🎯 Learning Outcomes

By completing this project, you will be able to:

- Understand the differences between SQL and NoSQL databases.
- Build RESTful APIs with Express.js.
- Perform CRUD operations using MongoDB and MySQL.
- Implement clean MVC architecture.
- Handle asynchronous database operations using async/await.
- Write secure SQL queries using parameterized statements.
- Organize backend projects following industry best practices.

---

# 👨‍💻 Author

**Yassine Kalthoum**

Full Stack JavaScript Developer

---

# 📄 License

This project was developed for educational purposes as part of a Node.js backend checkpoint and is open for learning, modification, and further development.
