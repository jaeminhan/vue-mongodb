const TeamMember = require('../../models/teamMember');

module.exports = (router) => {
	// GET: List of Team Members
	router.get('/team', (req, res) => {
		TeamMember.find()
		.sort({ 'name': 1 })
		.exec()
		.then(doc => res.status(200)
			.json(doc))
		.catch(err => res.status(500)
			.json({
				message: 'Error finding team members',
				error: err
			}))
	})


	// POST: get new meeting member document
	router.post('/team', (req, res) => {
		let member = new Standup(req.body)
		member.save((err, member) => {
			if (err) {
				return res.status(400).json(err)
			} 
			res.status(200).json(member);
		})
	})
}