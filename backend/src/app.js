require("dotenv").config();

const cors = require("cors");
const express = require("express");
const pool = require("./config/db");
const { login } = require("./controllers/authController");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);

app.use(express.json({ limit: "10kb" }));

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT version()");
    res.send(result.rows[0].version);
  } catch (error) {
    console.error("Database connection failed:", error);
    res.status(500).send("Database connection failed");
  }
});

app.post("/api/auth/login", login);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found." });
});

const port = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

module.exports = app;