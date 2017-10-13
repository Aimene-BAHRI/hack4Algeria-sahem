/**
 * Created by kissi on 13/10/17.
 */
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var NeedSchema= Schema({
    'humensNeed':Number,
    'materialsNeed':String,
    'descriptionNeed':String
})
var ModelNeed=mongoose.model('need',NeedSchema);

module.exports=ModelNeed;