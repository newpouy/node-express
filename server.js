const express = require('express');
const app = express();
const port = process.env.PORT || 3003;

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.get('/health', (req, res) => {
  res.sendStatus(200);
});

app.get('/blossom', (req, res) => {
  res.send('Hello blossom server!');

app.get('/khk', (req, res) => {
  res.send('어서오세요 김회경서버입니다!');
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

