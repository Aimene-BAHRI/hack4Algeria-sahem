var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/hackforalgeria');

var EventSchema = new Schema({
	'publisher':{type: Schema.Types.ObjectId},
	'name': String,
	'uuid': Date.now(),
	's_date' : Date,
	'end_date' : Date,
	'place_map' : String,
	'eventDescription':String,
	'adress' : String,
	'wilaya' : String,
	'founding': {type : Number, default : 0},
	'needs' : Array,
	'participent' : [{
	 	type: Schema.Types.ObjectId,
	 	ref: 'users'
	}],
	'pendingParticipents' : [{
	 	type: Schema.Types.ObjectId,
	 	ref: 'users'
	}]
});


var EventModel=mongoose.model('Event', EventSchema);
/*
var e1=new EventModel();
e1.name="new event";
e1.address="@@@@";

e1.save(function (err,suc) {
	if(!err){
		console.log('succccc')
		console.log(suc)
	}

})
*/
module.exports = EventModel;