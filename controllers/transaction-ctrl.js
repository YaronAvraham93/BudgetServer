const Transaction = require('../modules/transaction-model');

const createTransaction = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a transaction'
        })
    }

    const transaction = new Transaction(body);

    if (!transaction) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }

    transaction.save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: transaction._id,
                message: 'transaction created!'
            })
        })
        .catch(error => {
            console.log(error)
            return res.status(400).json({
                error,
                message: 'transaction not created!'
               
            })
            
        })
}

const getTransaction = (req, res) => {
    transaction.find()
        .then(transaction => {
            if (!transaction.length) {
                return res.status(404).json({ success: false, error: 'not a single tourist was found' })
            }
            else {
                return res.status(200).json({ success: true, data: transaction });
            }
        })
        .catch(error => {
            console.log(error);
            return res.status(400).json({
                success: false,
                error: error,
                message: 'Could not get transaction!'
            })
        })
}
const deleteTransaction= async (req, res) => {
    await transaction.findOneAndDelete({ _id: req.params.id }, (err, transaction) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!transaction) {
            return res.statuse(404).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, date: transaction })
    }).catch(err => console.log(err))
}

const updateTransaction = (req, res) => {
    const body = req.body

    transaction.updateOne({ _id: req.params.id }, body)
        .then(() => {
            return res.status(200).json({ seccess: true });
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: "transaction not updated!"
            })
        })

}
module.exports = {
    getTransaction,
    deleteTransaction,
    createTransaction,
    updateTransaction
    
}