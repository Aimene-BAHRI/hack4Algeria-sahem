var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var SocietySchema = new Schema({

module.exports = mongoose.model('Society', SocietySchema);