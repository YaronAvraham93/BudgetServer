const Transaction = require("../modules/transaction-model");

const createTransaction = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Error ! Make sure you fill in all the fields",
    });
  }
  try {
    const transaction = Transaction(body);

    await transaction.save();
    return res.status(201).json({
      success: true,
      id: transaction._id,
      message: "transaction created!",
    });
  } catch (err) {
    return res.status(400).json({
      err,
      message: "transaction not created!",
    });
  }
};

const getTransaction = async (req, res) => {
  try {
    await Transaction.find();
    if (!transaction) {
      return res
        .status(404)
        .json({ success: false, error: "not a single transaction was found" });
    }
    return res.status(200).json({ success: true, data: transaction });
  } catch (err) {
    return res.status(400).json({
      success: false,
      err,
      message: "Could not get transaction!",
    });
  }
};

const deleteTransaction = async (req, res) => {
  try {
    await Transaction.findOneAndDelete(
      { _id: req.params.id },
      (err, transaction) => {
        if (err) {
          return res.status(400).json({ success: false, err });
        }
        if (!transaction) {
          return res.statuse(404).json({ success: false, err });
        }
        return res
          .status(200)
          .json({ success: true, message: "The transaction has been deleted" });
      }
    );
  } catch (err) {
    console.error(err.message);
  }
};

const updateTransaction = async (req, res) => {
  try {
    const body = req.body;
    await Transaction.updateOne({ _id: req.params.id }, body);
    return res.status(200).json({ success: true });
  } catch (err) {
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
