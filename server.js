const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.get('/health', (req, res) => {
  res.sendStatus(200);
});













app.get('/vincent', (req, res) => {
  res.send('Hello this is Vincent from the server! 가즈아~~~');
});





app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
