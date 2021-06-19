const router = require('express').Router()
router.get('/', (req, res) => {
	res.send('soy la ruta de tecnologias')
})

module.exports = router