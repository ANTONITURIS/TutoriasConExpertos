/* eslint-disable no-console */
const express = require('express');
const defaultDb = require('./src/utils/config/defaultDb');
const router = require('./src/routes/index');
const {
  conn,
} = require('./src/models/index');
const {
  PORT,
} = require('./src/utils/config/index');

const app = express();
app.use(
  express.urlencoded({
    extended: true,
    limit: '50mb',
  }),
);

app.use(
  express.json({
    limit: '50mb',
  }),
);
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', true);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type',
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
app.use('/api', router);

app.get('/', (_req, res) => {
  res.send('La ruta principal es: /api');
});

app.use((err, _req, res) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  return res.status(status).send(message);
});

conn
  .sync({
    force: true,
  })
  .then(() => {
    console.log('DB conectada');
    defaultDb();
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  });
