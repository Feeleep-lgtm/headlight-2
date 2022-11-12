const path = require('path')
const multer = require('multer')
const { v4 : uuid } = require('uuid')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {
        cb(null, uuid() + ".csv")
    }
})

// Define the maximum size for uploading
const maxSize = 1 * 1000 * 1000;

exports.upload = multer({
    storage: storage,
    limits: {
        fileSize: maxSize
    },
    fileFilter: function (req, file, cb) {
        const filetypes = /csv/;
        const mimetype = filetypes.test(file.mimetype);

        const extname = filetypes.test(path.extname(
            file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }

        cb("Error: File upload only supports the " +
            "following filetypes - " + filetypes);
    }
}).single("csv");