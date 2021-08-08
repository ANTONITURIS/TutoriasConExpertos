/* eslint-disable */
const router = require('express').Router();
const { CrearTecnologia, ModificarTecnologia, ObtenerTecnologias } = require("../controllers/tecnologias.controllers")

router.post('/', CrearTecnologia)
router.put('/:id', ModificarTecnologia)
router.get('/', ObtenerTecnologias)

router.get('/', (_req, res) => {
	res.send('soy la ruta de tecnologias');
});


module.exports = router;
