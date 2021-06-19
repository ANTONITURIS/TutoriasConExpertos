const express = require('express')
const morgan = require('morgan')

const router = require('./src/routes/index.js')
const app = express()
app.use(morgan('dev'))
app.use('/api', router)

app.get('/', (_req, res) => {
	res.send('La ruta principal es: /api')
})


app.listen(4001, () => {
	console.log('servidor listo');
});
