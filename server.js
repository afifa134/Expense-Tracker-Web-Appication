const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public')); // serves all files from /public folder

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});
