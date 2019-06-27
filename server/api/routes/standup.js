const Standup = require('../../models/standup');

module.exports =  (router) => {
	// GET: the 12 newest stand-up meeting notes
	router.get('/standup', (req, res) => {
		Standup.find()
		// latest to oldest order
			.sort({ 'createdOn': -1 })
			.exec()
			.then(docs => res.status(200)
				.json(docs))
			.catch(err => res.status(500)
				.json({
					message: 'Error finding standup meeting notes',
					error: err
				}))
	})

	// POST: get new meeting note document
	router.post('/standup', (req, res) => {
		let note = new Standup(req.body)
		note.save((err, note) => {
			if (err) {
				return res.status(400).json(err)
			} 
			res.status(200).json(note);
		})
	})
}


