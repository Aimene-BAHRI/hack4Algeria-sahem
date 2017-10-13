var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var EventSchema = new Schema({
	'name': String,
	's_date' : Date,
	'end_date' : Date,
	'place_map' : String,
	'adress' : String,
	'wilaya' : String,
	'needs' : Array,
	'participent' : [{
	 	type: Schema.Types.ObjectId,
	 	ref: 'pending'
	}],
	'pendingParticipents' : [{
	 	type: Schema.Types.ObjectId,
	 	ref: 'pending'
	}]
});

module.exports = mongoose.model('Event', EventSchema);
