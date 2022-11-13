const fs = require('fs')
const convertCSV = require('../utilities/convert')
const formidable = require('formidable')

exports.csvUpload = function (req, res, next) {
const form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
const filePath = files.csv.filepath;
console.log(filePath)
convertCSV(filePath)
    .then(data => {
     res.status(200).json(data) 
  })
  .catch(error => {
                res.status(400).send(error)
            })
 })
}