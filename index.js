const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Version Control and Management System! We hope you have a great experience.');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});