/**
 * Created by kissi on 13/10/17.
 */
var mongoose=require('mongoose')
var Schema = mongoose.Schema

var CategorySchema=Schema({

    categoryName:{type : String, es_indexed:true},
    eventsCategory:[{type:Schema.type.ObjectId ,ref:'events'}]

})

var ModelCategory = mongoose.model('category',CategorySchema)







