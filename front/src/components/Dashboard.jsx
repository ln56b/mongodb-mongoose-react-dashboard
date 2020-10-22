import React, { useState } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import ClientService from '../services/ClientService';

import ClientForm from './ClientForm';
import Clients from './Clients';
import ClientCard from './ClientCard';
// import Notification from './Notification';

import Button from 'react-bootstrap/Button';

function Dashboard() {
	// State
	const initialClientState = {
		id: null,
		genre: '',
		prenom: '',
		nom: '',
		email: '',
	};
	const [client, setClient] = useState(initialClientState);
	const [clients, setClients] = useState([]);
	const [, setError] = useState('');

	// Router history
	const history = useHistory();

	// CRUD methods
	const getClients = () => {
		ClientService.findAll()
			.then((res) => setClients(res.data))
			.catch((err) => setError(err.message));
	};

	const getClientById = (id) => {
		ClientService.findOne(id)
			.then((res) => setClient(res.data))
			.catch((err) => setError(err.message));
	};

	const createClient = () => {
		ClientService.create(client)
			.then(() => setClient(initialClientState))
			.then(() => {
				history.push('/');
				getClients();
			});
	};

	//TODO
	const updateClient = (client) => {
		ClientService.update(client.id, client)
			.then(() => setClient(initialClientState))
			.then(() => {
				history.push('/');
				getClients();
			});
	};

	const deleteClient = (id) => {
		ClientService.remove(id).then(() => {
			history.push('/');
			getClients();
		});
	};

	// Form methods
	const handleChange = (event) => {
		const { name, value } = event.target;
		setClient({ ...client, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		!client.id ? createClient() : updateClient(client);
	};

	return (
		<div className="dashboard">
			<Route exact path="/">
				<h1>Dashboard</h1>
				<Link to={'/form'}>
					<Button variant="primary" type="submit" style={{ margin: '1rem' }}>
						Add a client
					</Button>
				</Link>
				<Clients
					clients={clients}
					getClients={getClients}
					deleteClient={deleteClient}
				/>
			</Route>
			<Route path="/form">
				<ClientForm
					client={client}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
			</Route>
			<Route path="/clients/:id">
				<ClientCard
					client={client}
					getClientById={getClientById}
					updateClient={updateClient}
					deleteClient={deleteClient}
				></ClientCard>
			</Route>
		</div>
	);
}

export default Dashboard;
