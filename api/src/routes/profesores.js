const router = require('express').Router();
const {
	registrarProfesor, ObtenerProfesores, ModificarProfesores, EliminarProfesor,
} = require('../controllers/profesores.controller');

router.post('/', registrarProfesor);
router.get('/', ObtenerProfesores);
router.put('/:id', ModificarProfesores);
router.delete('/:id', EliminarProfesor);

module.exports = router;
