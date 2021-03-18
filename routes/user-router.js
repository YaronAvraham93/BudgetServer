const express = require('express');
const userCtrl = require('../controllers/user-ctrl');
const validation = require('../validationChacks/validation')

const router = express.Router();

router.post('/',validation.userValidation,userCtrl.createUser);

router.get('/:id', userCtrl.getUserById);

router.delete('/:id', userCtrl.deleteUser);

router.put('/:id', userCtrl.updateUser);



module.exports = router;