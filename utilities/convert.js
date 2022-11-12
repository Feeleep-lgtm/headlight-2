const fs = require('fs')
const path = require('path')
const csv = require('csv-parser')

module.exports = function (filePath) {
    if (path.extname(filePath) !== '.csv') {
        return new Error('unsupported file format')
    }
    const jsonData = []
    return new Promise(function (resolve, reject) {
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('error', () => {
                reject('error reading file')
            })
            .on('data', (row) => {
                // validation here before adding to array
                jsonData.push(row)
            })
            .on('end', () => {
                resolve(jsonData)
            })
    })
} 