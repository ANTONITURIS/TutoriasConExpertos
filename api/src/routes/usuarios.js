const router = require('express').Router();
const {
  verificarToken,
} = require('../middleware/autjwt');
const {
  ModificarUsuarios, ObtenerUsuariosId, registrarUsuario, ObtenerUsuarios, loginUsuario,
} = require('../controllers/usuarios.controller');

router.post('/', registrarUsuario);
router.post('/login', loginUsuario);
router.put('/:id', verificarToken, ModificarUsuarios);
router.get('/', ObtenerUsuarios);
router.get('/:id', ObtenerUsuariosId);
router.get('/', (_req, res) => {
  res.send('soy la ruta de alumnos');
});

module.exports = router;
