const multer = require('multer')
const path = require('path')
const {isCSV} = require('./extValidator')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,  path.join( __dirname, "../uploads") )
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() +".csv")
    }
  })

const maxSize = 1 * 1000 * 1000;
    
module.exports = multer({ 
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb){
const mimetype = /text\/comma-separated-values/.test(file.mimetype) ||  /text\/csv/.test(file.mimetype);
  
const extname = isCSV(file.originalname.toLowerCase())  

 if (mimetype && extname) {
     return cb(null, true);
  }
cb("File upload only supports CSV filetype");
      } 
}).single('csv'); 