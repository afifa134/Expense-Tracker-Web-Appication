const express = require('express');
const path = require('path');
const app = express();

// Serve static scripts
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));

// Serve HTML pages
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000/login");
});
