const { appendFileSync } = require("fs");

const upload = async (req, res) => {
	try {
		const query = new URLSearchParams(req.url);
		const fileName = `${query.get(`/upload?fileName`)}.csv`;

		req.on('data', chunk => {
			// append to a file on the disk
			appendFileSync(fileName, chunk);
		})

		res.json({msg: 'Yay! File is uploaded.'});	
	} catch (error) {
		res.json({error});
	}
}

module.exports = { upload }