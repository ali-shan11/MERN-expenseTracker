const Transaction = require('../models/Transaction')

// @desc  Get All Transactions
//@route  Get /api/v1/transactions
//@access public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// @desc  aDD Transactions
//@route  POST /api/v1/transactions
//@access public
exports.addTransactions = async(req, res, next) =>{
    try{
        const {text, amount} = req.body;

        const transaction = await Transaction.create(req.body)
        return res.send(201).json({
            success : true,
            data: transaction
        })
    }catch(err){
        console.log(err)
    }
}

// @desc  Delete Transactions
//@route  Get /api/v1/transactions/:id
//@access public
exports.deleteTransactions = async(req, res, next) =>{
    res.send('Delete Transactions')
}