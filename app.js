// IMPORTS
const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const compression = require('compression')
const helmet = require('helmet')

const Router = require('./routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(compression())
app.use(helmet())

app.use('/api', Router)

// Default Error Route
Router.all('*', (req, res) => {
	res.status(404).json({ message: "Route Not Found"})
})

const start = async () => {
	try {
		app.listen(process.env.PORT, process.env.HOST)
        console.log(`Server started on ${process.env.HOST}:${process.env.PORT}`)
	} catch (error) {
		console.log(error)
	}
}

start()