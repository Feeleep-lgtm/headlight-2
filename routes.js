const Router = require('express').Router();

const { upload } = require('./controllers')

Router.get('/', (req, res) => {
	try {
		res.json({msg: "Welcome to the API"});	
	} catch (error) {
		res.json({error});
	}
})
Router.post('/upload', upload);

module.exports = Router
