const express = require('express');
const app = express();
const PORT = 80;

app.get('/sayHello', (req, res) => {
  res.json({ message: "Hello User 1." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
