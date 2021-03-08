const express=require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app=express();

app.use(bodyParser.json());
app.use(cors());
const userRouter = require('./routes/user-router')
const transaction = require('./routes/transaction-router')
// const creditCardC = require('./routes/creditCard-router')

app.use('/user',userRouter)
app.use('transaction',transaction)
// app.use('creditCardC',creditCardC)




const PORT=process.env.PORT || 3001

app.listen(PORT,()=> console.log(`Server run on port ${PORT}`))