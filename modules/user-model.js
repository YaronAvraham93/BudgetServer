const mongoose = require('mongoose');

const schema = mongoose.Schema;

const creditCardSchema = new schema({
    expYear:{ type: Number, required: true },
    expMonth:{ type: Number, required: true },
    last4Digits: { type: Number, required: true },
})

const userSchema = new schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true,unique:true },
    avatar: { type: String, required: true },
    current_balance: { type: String, required: true },
    currentBalanceCurrency: { type: String, required: true },
    creditCard:[creditCardSchema]
    
})

const user = new mongoose.model("users", userSchema);
module.exports = user;

