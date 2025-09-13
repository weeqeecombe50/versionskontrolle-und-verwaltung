const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Version Control and Management System! We hope you enjoy your experience using this application.');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});