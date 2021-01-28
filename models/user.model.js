var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/stockDB';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true},() => console.log('User model Connected to DB !'));

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
    _id : String,
    userName : String,
    email : String
  });

module.exports = mongoose.model('User',UserModelSchema)