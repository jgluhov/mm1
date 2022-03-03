import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({ status: 'success' });
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Express is listening at http://localhost:${port}`));
