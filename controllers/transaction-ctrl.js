const Transaction = require("../modules/transaction-model");
const { validationResult } = require("express-validator");
const logger = require('../logger/logger')

const createTransaction = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const body = req.body;
    const transactionSchema = Transaction(body);
    await transactionSchema.save();
    logger.log('info','transaction created!')
    return res.status(201).json(
       "transaction created!",
    );
  } catch (err) {
    logger.error('error',err);
    return res.status(400).json(
      err,
      "transaction not created!",
    );
  }
};

const getTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.find();
    if (!transaction) {
      return res
        .status(404)
        .json( "not a single transaction was found" );
    }
    logger.log('info','Withdrawal of all transactions from the database')
    return res.status(200).json( transaction ).limit(3);;
  } catch (err) {
    logger.error('error',err);
    return res.status(400).json(
      err,
      "Could not get transaction!",
    );
  }
};

const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findOneAndDelete({
      _id: req.params.id,
    });
    if (!transaction) {
      return res
        .statuse(404)
        .json("transaction does not exist" );
    }
    logger.log('info','The transaction has been deleted')
    return res
      .status(200)
      .json( "The transaction has been deleted" );
  } catch (err) {
    logger.error('error',err);
    return res.status(400).json( err );
  }
};

const updateTransaction = async (req, res) => {
  try {
    const body = req.body;
    const transaction = await Transaction.updateOne(
      { _id: req.params.id },
      body
    );
    if (!transaction) {
      return res.status(400).json("Error" );
    }
    logger.log('info','The transaction has been updated')
    return res.status(200).json('The transaction has been updated' );
  } catch (err) {
    logger.error('error',err);
    return res.status(400).json(
      err,
     "transaction not updated!",
    );
  }
};
module.exports = {
  getTransaction,
  deleteTransaction,
  createTransaction,
  updateTransaction,
};
