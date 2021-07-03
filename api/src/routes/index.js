const router = require('express').Router();
const usuarios = require('./usuarios');

router.use('/usuarios', usuarios);
router.get('/', (req, res) => {
  res.send('soy la ruta principal');
});

module.exports = router;
