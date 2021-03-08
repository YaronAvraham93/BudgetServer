const mongoose = require("mongoose");

const schema = mongoose.Schema;

const expensesSchema = new schema({
    text: { type: String,},
    date: { type: Date, default: Date.now },
    userID: { type: schema.Types.ObjectId, ref: "Users" }

});

const transactionSchema = new schema(
  {
    income: { type: Number, required: true },
    expenses: [expensesSchema],
 }
)

const transaction = new mongoose.model("transactions", transactionSchema);
module.exports = transaction;














