const router = require('express').Router();
const alumnos = require('./alumnos');

router.use('/alumnos', alumnos);
router.get('/', (_req, res) => {
  res.send('soy la ruta principal');
});

module.exports = router;
