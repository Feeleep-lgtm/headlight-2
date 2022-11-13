const express = require('express');
const {v4 : uuid } = require('uuid')
const fs = require('fs')
const csvRoute = require('./router')
const cors = require('cors')
const helmet = require('helmet')

const path = require('path')

const app = express();
app.use(cors())
app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use('/api/upload', csvRoute)

app.get('/', (req, res) => {
    fs.readFile('index3.html', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('internal sever error')
        }
        res.status(200).send(data)
    })
})
app.get('/api', (req, res) => {
    fs.readFile('index3.html', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('internal sever error')
        }
        res.status(200).send(data)
    })
})

app.listen(8000, () => {
    console.log(`Server started...`);
});