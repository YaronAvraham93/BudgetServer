const express = require('express');
const userCtrl = require('../controllers/user-ctrl');

const router = express.Router();

router.post('/user', userCtrl.createUser);

router.get('/user/:id', userCtrl.getUserById);

router.delete('/user/:id', userCtrl.deleteUser);

router.put('/user/:id', userCtrl.updateUser);



module.exports = router;