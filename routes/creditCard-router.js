const express = require('express');
const creditCardCtrl = require('../controllers/creditCard-ctrl');

const router = express.Router();

router.post('/creditCard',creditCardCtrl);

router.get('/creditCard/:id', creditCardCtrl);

router.delete('/creditCard/:id',creditCardCtrl);

router.put('/creditCard/:id', creditCardCtrl);



module.exports = router;