const mongoose = require('mongoose');



const schema = mongoose.Schema;


const userSchema = new schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true,unique:true },
})

const user = new mongoose.model("Users", userSchema);
module.exports = user;

