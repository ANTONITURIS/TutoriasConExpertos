const router = require('express').Router()
router.get('/', (req, res) => {
	res.send('soy la ruta de profesores')
})

module.exports = router