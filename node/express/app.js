const express = require('express');
const app = express();

const { readFile } = require('fs').promises;

app.get('/', async (req, res) => {
  res.send(await readFile('./index.html', 'utf8'));
});

app.get('/page2', async (req, res) => {
  res.send(await readFile('./page2.html', 'utf8'));
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`App available on http://localhost:3000`)
);
