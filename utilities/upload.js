const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads")
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
    
        const filetypes = 'csv';
        const mimetype = /csv/.test(file.mimetype);
  
        const extname = /csv/.test(path.extname(
                    file.originalname).toLowerCase());
        
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("File upload only supports the "
                + "following filetypes - " + filetypes);
      } 
}).single('csv');  