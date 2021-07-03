const router = require('express').Router();
const {
  registrarUsuario,
} = require('../controllers/usuarios');

router.post('/', registrarUsuario);

module.exports = router;
