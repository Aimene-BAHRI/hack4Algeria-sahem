var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var SocietySchema = new Schema({	'name' : String,	'email' : String,	'phone' : Number,	'isPremium' : Boolean});

module.exports = mongoose.model('Society', SocietySchema);
