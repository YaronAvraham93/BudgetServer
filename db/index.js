const mongoose = require('mongoose');
require('dotenv').config()
const logger = require('../logger/logger')

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.URL_DB,{ useNewUrlParser: true,useUnifiedTopology:true })
        logger.log('info','MongoDb connected'); 
    }catch(err){
        logger.error('error',err);
       
    }
}

module.exports = connectDB;

