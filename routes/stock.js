const express = require('express')
const router = express.Router()
const StockModel = require('../models/stock.model')

router.post('/createStock',(req,res) => {
    console.log("create stock",req.body)
    const stock = new StockModel({
        stockName : req.body.stockName,
        stockInfo : req.body.stockInfo
        // stockDate:req.body.stockDate,
        // stockPrice:req.body.stockPrice
    })
    stock.save()
    .then(doc => {
        res.status(201).json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/getAllStocks',(req,res) => {
    StockModel.find({})
    .then(doc => {
        res.status(201).json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/getStockDetail',(req,res) => {
    const id = req.query.id
    console.log(id)
    StockModel.findById({ _id : id })
    .then(doc => {
        res.status(201).json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/error',(req,res) => {
    res.sendStatus(500)
})

module.exports = router