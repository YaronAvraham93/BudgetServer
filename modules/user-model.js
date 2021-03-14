const mongoose = require('mongoose');

const schema = mongoose.Schema;

// const creditCardSchema = new schema({
//     exp_year:{ type: Number, required: true },
//     exp_month:{ type: Number, required: true },
//     last4Digits: { type: Number, required: true },
// })

const userSchema = new schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    // email: { type: String, required: true,unique:true },
    // avatar: { type: String, required: true },
    // current_balance: { type: String, required: true },
    // current_balance_currency: { type: String, required: true },
    // credit_card:[creditCardSchema]
    
})

const user = new mongoose.model("users", userSchema);
module.exports = user;

