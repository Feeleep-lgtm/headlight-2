const {
    upload
} = require('../utilities/csv')
const convertCSV = require('../utilities/convert')
const fs = require('fs')

// post request handler for route '/csv'
module.exports = (req, res, next) => {
    upload(req, res, function (err) {
        if (err) {
            res.status(400).json({
                success: false,
                message: err
            })
        } else {
            const filePath = req.file.path
            convertCSV(filePath).then(data => {
                fs.unlink(filePath, (err) => {
                    if (err) {
                       // next(err)
return res.status(500).send("internal system error")
                    }
                    res.status(200).json(data)
                })
            }).catch(error => {
                res.status(400).json({error})
            })
        }
    })
}
