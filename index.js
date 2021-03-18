const express=require('express');
const cors = require('cors')
const connectDB = require('./db/index')
const logger = require('./logger/logger')
const app=express();

connectDB()
app.use(cors());
app.use(express.json({extended:true}));
const userRouter = require('./routes/user-router')
const transaction = require('./routes/transaction-router')

app.use('/api/transaction',transaction)
app.use('/api/user',userRouter)
app.get('/health-check',(req,res) =>{res.send('OK')})

const PORT=process.env.PORT || 3001

app.listen(PORT,()=> logger.log('info',`Server run on port ${PORT}`))