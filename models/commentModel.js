var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var CommentSchema=mongoose.Schema({
    targetNeed:String,
    text:String,
    publisher:{type: Schema.Types.ObjectId ,ref:'users'},
    createdOn:Date.now()
})

