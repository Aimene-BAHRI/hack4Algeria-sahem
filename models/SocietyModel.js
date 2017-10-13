var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var EventModel=require('./EventModel')
mongoose.connect('mongodb://localhost:27017/hackforalgeria');



var SocietySchema = new Schema({
	'name' : String,
	'email' : String,
	'phone' : Number,
	'isPremium' : Boolean,


});



SocietySchema.statics.approuveParticipant=function(eventId,userId){
	EventModel.findOne({_id:eventId},function (err,suc) {
		suc.participent.push(userId);
		//TODO increment point of user


	})
}


var SocietyModel=mongoose.model('Society', SocietySchema);





module.exports = SocietyModel;