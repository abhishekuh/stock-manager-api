
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://abhishek:<password>@cluster0.yzurw.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


var mongoose = require('mongoose');

var mongoDB = 'mongodb+srv://abhishek:abhishek@cluster0.yzurw.mongodb.net/stockDB?retryWrites=true&w=majority';
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