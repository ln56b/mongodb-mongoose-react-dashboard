const Client = require('../models/Client');

exports.createClient = (req, res, next) => {
	const client = req.body;
	client
		.save()
		.then(() => res.status(201).json({ message: 'New client saved' }))
		.catch((err) => res.status(400).json({ err }));
};

exports.getAllClients = (req, res, next) => {
	Client.find()
		.then((clients) => {
			res.status(200).json(clients);
		})
		.catch((err) => {
			res.status(400).json({ error: err });
		});
};

exports.getOneClient = (req, res, next) => {
	Client.findOne({
		_id: req.params.id,
	})
		.then((client) => res.status(200).json(client))
		.catch((err) => res.status(400).json({ error: err }));
};

exports.modifyClient = (req, res, next) => {
	const client = req.body;
	Client.updateOne({ _id: req.params.id }, { client, _id: req.params.id })
		.then(() => res.status(200).json({ message: 'Client succesfully updated' }))
		.catch((err) => res.status(400).json({ err }));
};

exports.deleteClient = (req, res, next) => {
	Client.findOne({ _id: req.params.id })
		.then((client) => {
			Client.deleteOne({ _id: req.params.id })
				.then(() =>
					res.status(200).json({ message: 'Client successfully deleted' })
				)
				.catch((err) => res.status(400).json({ err }));
		})
		.catch((err) => res.status(500).json({ err }));
};
