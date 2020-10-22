const express = require('express');
const router = express.Router();

const clientsCtrl = require('../controllers/clients');

router.get('/', clientsCtrl.getAllClients);
router.post('/', clientsCtrl.createClient);
router.get('/:id', clientsCtrl.getOneClient);
router.put('/:id', clientsCtrl.modifyClient);
router.delete('/:id', clientsCtrl.deleteClient);

module.exports = router;
