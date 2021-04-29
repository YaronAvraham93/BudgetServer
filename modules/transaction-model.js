const mongoose = require("mongoose");

const schema = mongoose.Schema;

const transactionSchema = new schema(
  {
    userID: { type: schema.Types.ObjectId, ref: "Users" },
    paymentType: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    cancelled: { type: Boolean, required: true },
    date: { type: Date ,require:true},
    currency: { type: String, required: true },
    category: { type: String, required: true },
    company: { type: String, required: true },
    amount: { type: Number, required: true },
    location:  {
        country: { type: String,required: true },
       city: { type: String,required: true },},
 }
)

const transaction = new mongoose.model("transactions", transactionSchema);
module.exports = transaction;














