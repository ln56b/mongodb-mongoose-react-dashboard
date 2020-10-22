import http from '../http-common';

const create = (client) => {
	return http.post('/clients', client);
};

const findAll = () => {
	return http.get('/clients');
};

const findOne = (id) => {
	return http.get(`/clients/${id}`);
};

const update = (id, client) => {
	return http.put(`/rides/${id}`, client);
};

const remove = (id) => {
	return http.delete(`clients/${id}`);
};

export default {
	create,
	findAll,
	findOne,
	update,
	remove,
};
