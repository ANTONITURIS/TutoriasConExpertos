const express = require('express')
const app = express()
app.get('/', (req, res) => {
	res.send('conexion ok')
})
app.listen(3001, () => {
	console.log('servidor listo');
});