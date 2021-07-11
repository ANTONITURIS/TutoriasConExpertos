const router = require('express').Router();

const {
  registrarAlumno, ObtenerAlumnos, ModificarAlumnos, EliminarAlumno,
} = require('../controllers/alumnos.controller');

router.post('/', registrarAlumno);
router.get('/', ObtenerAlumnos);
router.put('/:id', ModificarAlumnos);
router.delete('/:id', EliminarAlumno);
router.get('/', (_req, res) => {
  res.send('soy la ruta de alumnos');
});

module.exports = router;
