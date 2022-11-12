const express = require('express')
const fs = require('fs')
// const path = require('path')
// const cors = require('cors')
// const helmet = require('helmet')
const {
    json
    // urlencoded
} = express

// const csvUpload  = require('./routes/upload')

const app = express()

// add middlewares
// app.use(cors())
// app.use(helmet())

app.use(json())
// app.use(urlencoded({
    // extended: true
// }))

// example form 
app.get('/', (req, res) => {
    fs.readFile("./index.html", "utf-8", (err, data) => {
        if (err) return res.send('error')
        res.send(data)
    })
})
// app.post("/csv", csvUpload )

// generic route handler

// server exeption handler

app.listen(8080, () => {
    console.log('server up and running')
})
