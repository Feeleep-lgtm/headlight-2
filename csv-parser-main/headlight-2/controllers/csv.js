const fs = require('fs')
const convertCSV = require('../utilities/convert')
const upload = require('../utilities/upload')

exports.csvUpload = function (req, res, next) {
    upload(req, res, function (err) {
        if (err) {
            return res.status(400).json({
                succes: false,
                message: err
            })
        }
        const filePath = req.file.path
        convertCSV(filePath)
            .then(data => {
                fs.unlink(filePath, err => {
                    if (err) {
                        return res.status(500).send('internal server error')
                    }
                    res.status(200).json(data)
                })
            })
            .catch(error => {
                res.status(400).send(error)
            })
    })
}