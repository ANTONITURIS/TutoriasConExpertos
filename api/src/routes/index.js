const router = require('express').Router()
router.get('/', (req, res) => {
	res.send('soy la ruta principal')
})

module.exports = router