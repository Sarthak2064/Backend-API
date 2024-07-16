const express = require('express');
const app = express();
const PORT = 80;

app.get('/sayHello', (req, res) => {
  res.json({ message: "Hello how are you." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
