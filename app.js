const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;  // Change 5000 to 3000 or any other available port


const app = express();
app.use(bodyParser.json());

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  db.query(sql, [username, email, password], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error registering user', error: err });
    }
    res.json({
      message: 'User registered successfully!',
      data: { username, email }
    });
  });
});

app.listen(5000, () => {
  console.log('Server running on http://127.0.0.1:5000');
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
