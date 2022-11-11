const fs = require('fs')
const path = require('path')
const csv = require('csv-parser');

// a promise based function that takes a csv file and return a json array
async function convertCSV(filePath) {
    if (path.extname(filePath) !== '.csv') {
        throw new Error("unsupported file type")
    }
    const jsonData = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('error', () => {
                reject("erroe reading file")
            })
            .on('data', (row) => {
                if (!row.name || !row.organization || !row.award || !row.description || !row.date || !row.certificate_number) {
                    return 'invalid data type'
                }
                jsonData.push(row)
            })
            .on('end', () => {
                resolve(jsonData)
            });
    })
}

// testing out the function
convertCSV("SampleCSV - Sheet1.csv").then(data => {
    console.log(data)
}).catch(error => console.log({"error": error}))