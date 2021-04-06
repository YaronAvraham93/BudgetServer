const express = require('express');
const transactionCtrl = require('../controllers/transaction-ctrl');
const validation = require('../validationChacks/validation')


const router = express.Router();

router.post('/',validation.transactionValidation,transactionCtrl.createTransaction.limit(3));

router.get('/transactions', transactionCtrl.getTransaction);

router.delete('/:id',transactionCtrl.deleteTransaction);

router.put('/:id', transactionCtrl.updateTransaction);

module.exports = router;