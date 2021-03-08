const express = require('express');
const transactionCtrl = require('../controllers/transaction-ctrl');

const router = express.Router();

router.post('/transaction',transactionCtrl.createTransaction);

router.get('/transactions', transactionCtrl.getTransaction);

router.delete('/transaction/:id',transactionCtrl.deleteTransaction);

router.put('/transaction/:id', transactionCtrl.updateTransaction);

module.exports = router;