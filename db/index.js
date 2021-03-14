const mongoose = require('mongoose');
const url='mongodb://localhost:27017/Budget'
const connectDB = async () => {
    try{
        await mongoose.connect(url,{ useNewUrlParser: true,useUnifiedTopology:true })
        console.log('MongoDb connected');
    }catch(err){
        console.error(err.message);
    }
}

module.exports = connectDB;

