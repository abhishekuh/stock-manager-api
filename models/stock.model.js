var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/stockDB';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true},() => console.log('Stock model Connected to DB !'));

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;

var StockModelSchema = new Schema({
    stockName : String,
    stockInfo : Array,
    // stockDate : String,
    // stockPrice : String
  });

module.exports = mongoose.model('Stock',StockModelSchema)