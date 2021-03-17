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
    const transaction = await transactionSchema.save();
    return res.status(201).json({
      success: true,
      id: transaction._id,
      message: "transaction created!",
    });
  } catch (err) {
    logger.error('error',err);
    return res.status(400).json({
      err,
      message: "transaction not created!",
    });
  }
};

const getTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.find();
    if (!transaction) {
      return res
        .status(404)
        .json({ success: false, error: "not a single transaction was found" });
    }
    return res.status(200).json({ success: true, data: transaction });
  } catch (err) {
    logger.error('error',err);
    return res.status(400).json({
      success: false,
      err,
      message: "Could not get transaction!",
    });
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
        .json({ success: false, message: "transaction does not exist" });
    }
    return res
      .status(200)
      .json({ success: true, message: "The transaction has been deleted" });
  } catch (err) {
    logger.error('error',err);
    return res.status(400).json({ success: false, err });
  }
};

const updateTransaction = async (req, res) => {
  try {
    const body = req.body;
    const transaction = await Transaction.updateOne(
      { _id: req.params.id },
      body
    );
    return res.status(200).json({ success: true, data: transaction });
  } catch (err) {
    logger.error('error',err);
    return res.status(400).json({
      err,
      message: "transaction not updated!",
    });
  }
};
module.exports = {
  getTransaction,
  deleteTransaction,
  createTransaction,
  updateTransaction,
};
