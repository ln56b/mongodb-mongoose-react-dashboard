const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoUrl = require('./config');

mongoose
	.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Connexion à MongoDB réussie !'))
	.catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
	);
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, PATCH, OPTIONS'
	);
	next();
});

app.use('/api/stuff', (req, res, next) => {
	const stuff = [
		{
			_id: 'oeihfzeoi',
			title: 'Mon premier objet',
			description: 'Les infos de mon premier objet',
			imageUrl:
				'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
			price: 4900,
			userId: 'qsomihvqios',
		},
		{
			_id: 'oeihfzeomoihi',
			title: 'Mon deuxième objet',
			description: 'Les infos de mon deuxième objet',
			imageUrl:
				'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
			price: 2900,
			userId: 'qsomihvqios',
		},
	];
	res.status(200).json(stuff);
});

app.use((req, res, next) => {
	res.status(201);
	next();
});

app.use((req, res, next) => {
	res.json({ message: 'Votre requête a bien été reçue !' });
	next();
});

app.use((req, res, next) => {
	console.log('Réponse envoyée avec succès !');
});

module.exports = app;
