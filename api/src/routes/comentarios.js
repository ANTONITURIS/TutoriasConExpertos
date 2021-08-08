/* eslint-disable */
const router = require('express').Router();
const { ModificarComentarios, ObtenerComentarios, CrearComentarios } = require("../controllers/comentarios.controllers")
const { verificarToken } = require("../middleware/autjwt")

router.post('/', verificarToken, CrearComentarios)
router.put('/:id', verificarToken, ModificarComentarios)
router.get('/', verificarToken, ObtenerComentarios)

router.get('/', (_req, res) => {
  res.send('soy la ruta de tecnologias');
});


module.exports = router;
