const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // CORSエラー防止
app.use(express.json()); // JSON パース用

const todos = [
  { id: 1, text: "プール行って泳ぐ", completed: false },
  { id: 2, text: '映画を見る', completed: false },
];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
