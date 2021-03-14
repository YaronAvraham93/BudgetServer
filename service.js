const express=require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const connectDB = require('./db/index')
const app=express();

connectDB()
app.use(cors());
app.use(express.json({extended:true}));
const userRouter = require('./routes/user-router')
const transaction = require('./routes/transaction-router')


app.use('/api',userRouter,transaction)


const PORT=process.env.PORT || 3001

app.listen(PORT,()=> console.log(`Server run on port ${PORT}`))