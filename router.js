const router = require('express').Router()
const csvController = require('./controllers/csv') 

router.post('/', csvController.csvUpload)

module.exports = router
