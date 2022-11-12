const express = require('express');
const fs = require('fs')
const csvRoute = require('./router')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/csv', csvRoute)

app.get('/', (req, res) => {
    fs.readFile('index.html', 'utf-8', (err, data) => {
        if(err){
            return res.status(500).send('internal sever error')
        }
        res.status(200).send(data)
    })
})

app.listen(5000, () => {
    console.log(`Server started...`);
});

