const mongoose = require('mongoose');
const logger = require('../logger/logger')

const url=process.env.URL_DB
const connectDB = async () => {
    try{
        await mongoose.connect(url,{ useNewUrlParser: true,useUnifiedTopology:true })
        logger.log('info','MongoDb connected'); 
    }catch(err){
        logger.error('error',err);
       
    }
}

module.exports = connectDB;

