const Standup = require('../../models/standup');
const mongoose = require('mongoose');

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

	// GET: by team member Id
	router.get('/standup/:teamMemberId', (req, res) => {
		const qry = {
			_teamMemberId: mongoose.Types.ObjectId(req.params.teamMemberId)
		}
		Standup.find(qry)
			.sort({ 'createdOn': -1 })
			.exec()
			.then(docs => res.status(200)
				.json(docs))
			.catch(err => res.status(500)
				.json({
					message: 'Error finding standup notes for team member Id',
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


