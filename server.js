require("dotenv").config();

const express = require("express");
const connectMongoDB = require("./config/mongodb");

const mongoRoutes = require("./routes/mongo.routes");
const mysqlRoutes = require("./routes/mysql.routes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

connectMongoDB();

app.use(express.json());

// Routes
app.use("/api/mongo", mongoRoutes);
app.use("/api/mysql", mysqlRoutes);

// Global Error Handler (must be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});