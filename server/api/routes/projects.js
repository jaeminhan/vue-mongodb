const Project = require('../../models/project');

module.exports = (router) => {
	// GET: List of active projects
	 
	// custom filtering


	router.get('/projects', (req, res) => { 
    Project.find()
		.sort({ 'name': 1 })
		.exec()
		.then(doc => res.status(200)
			.json(doc))
		.catch(err => res.status(500)
			.json({
				message: 'Error finding active projects',
				error: err
			}))
	})


	// POST: get new meeting project document
	router.post('/projects', (req, res) => {
		let project = new Standup(req.body)
		project.save((err, project) => {
			if (err) {
				return res.status(400).json(err)
			} 
			res.status(200).json(project);
		})
	})
}