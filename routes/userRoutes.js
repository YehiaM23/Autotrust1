const express = require("express");
const router = express.Router();

// Dummy data for users (in a real app, use a database)
let users = [];

// Route to register a new user
router.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = { username, email, password };
  users.push(user); // Add user to dummy data

  return res.status(201).json({ message: "User registered successfully" });
});

// Route to login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email && u.password === password);
  
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  return res.status(200).json({ message: "Login successful", user_id: user.email });
});

module.exports = router;
