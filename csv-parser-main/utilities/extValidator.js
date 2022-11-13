exports.isCSV = function (string){
return string.slice(string.lastIndexOf('.')+ 1) === 'csv'
}