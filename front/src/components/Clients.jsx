import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Clients({ clients, getClients }) {
	useEffect(() => {
		getClients();
	}, []);

	return (
		<div className="clients">
			{clients &&
				clients.map((client) => (
					<Card
						key={client._id}
						style={{ textAlign: 'center', width: '18rem', margin: '1rem' }}
					>
						<Card.Body>
							<Card.Title>
								{client.prenom} {client.nom}
							</Card.Title>
							<Link to={`/clients/${client.id}`}>
								<Button
									variant="outline-primary"
									style={{ margin: '1rem' }}
									size="sm"
								>
									See more
								</Button>
							</Link>
						</Card.Body>
					</Card>
				))}
		</div>
	);
}

Clients.propTypes = {
	clients: PropTypes.array.isRequired,
	getClients: PropTypes.func.isRequired,
};

export default Clients;
