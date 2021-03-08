const mongoose = require('mongoose');



const schema = mongoose.Schema;


const  creditCardSchema = new schema({
    
    credit_card_number: { type: Number, required: true },
    expiry_date: { type: Date, required: true },
    userID: { type: schema.Types.ObjectId, ref: "Users" }

})

const creditCard = new mongoose.model("creditCards", creditCardSchema);
module.exports = creditCard;
