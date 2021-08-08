const router = require('express').Router();
const usuarios = require('./usuarios');
const tecnologias = require('./tecnologias');
const comentarios = require('./comentarios');

router.use('/tecnologias', tecnologias);
router.use('/usuarios', usuarios);
router.use('/comentarios', comentarios);
router.get('/', (_req, res) => {
  res.send('soy la ruta principal');
});

module.exports = router;
