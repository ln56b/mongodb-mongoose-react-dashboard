const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoUrl = require('./config');
const clientsRoutes = require('./routes/clients');

mongoose
	.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Succesful connection to MongoDB !'))
	.catch(() => console.log('Error connecting to MongoDB !'));

const app = express();

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

app.use(bodyParser.json());

app.use('/api/clients', clientsRoutes);

module.exports = app;
