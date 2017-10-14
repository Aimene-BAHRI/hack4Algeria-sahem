var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var mongoosastic = require('mongoosastic');
var config = require('../config/database');

var elasticsearch = require('elasticsearch');
//var EventModel=require('./EventModel');

var esClient = new elasticsearch.Client({host: "https://01d0571e.ngrok.io"});

function eventObject(evtObj) {




	// this.eventDescription=evtObj.eventDescription
	// this.uid=evtObj.uuid
	this.name=evtObj.name
	// this.numberOfParticipant=evtObj.participent.length
	// this.needs=evtObj.needs
	// this.place_map=evtObj.place_map
	// this.s_date=evtObj.s_date

}
var EventSchema = new Schema({
	'publisher':{type: Schema.Types.ObjectId},
	'name': {type:String,es_index:true},
	'uid': {type: Number, default: Date.now(), unique:true},
	's_date' :{type: String, default: "00/00/00"},
	'end_date' :{type: String, default: "00/00/00"},
	'place_map' : {type:String,default :null},
	'eventDescription':{type:String, default:""},
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
	}],


	'needId':{type:Schema.Types.ObjectId, ref:'needs'},

	'premiumDegree':{type:Number,es_index:true}


});


EventSchema.plugin(mongoosastic, {
	esClient: esClient
})

var EventModel=mongoose.model('Event', EventSchema);




/*
var e1=new EventModel();
e1.name="bad event";
e1.premiumDegree=1;*/
//e1.publisher=ObjectId("59e10a240e429239fcc03ca5");

/*e1.save(function (err,suc) {
	if(!err){
		console.log('succccc')
		console.log(suc)
	}

})
*/
function searchEngine(input,calback){

	EventModel.search({

		query_string: {
			query: input

		}
	},{sort:"premiumDegree:desc"}, function(err, results) {

		if(err)
			throw err
		else
		{
			var eventResult=results.hits.hits
			var renderingEvents=[]

			eventResult.forEach(function (e) {
				var evt=new eventObject(e._source);
				renderingEvents.push(evt)

			})
			calback(renderingEvents)
		}


	});


}

/*searchEngine("event",function (e) {
	console.log(e)
})*/

module.exports ={

	searchEngine:searchEngine,
	EventModel:EventModel

}
