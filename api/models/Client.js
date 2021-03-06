const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
	prenom: { type: String, required: true },
	nom: { type: String, required: true },
	email: { type: String, required: true },
	genre: { type: String, required: true },
});

module.exports = mongoose.model('Client', clientSchema);
