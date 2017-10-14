var Event = require('../models/EventModel.js');
var EventModel=Event.EventModel
var Search=Event.searchEngine;
var Category = require('../models/categoryModel');
/**
 * EventController.js
 *
 * @description :: Server-side logic for managing Events.
 */
module.exports = {

    /**
     * EventController.list() for API
     */
    list: function (req, res) {
        EventModel.find(function (err, Events) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Event.',
                    error: err
                });
            }
            return res.json(Events);
        });
    },
    listAllEvents: function (req, res){
        //TODO get all categories this function as callback
        Category.find(function (err, Categories) {
            /*err*/
            EventModel.find(function(err, Events){
                if (err) {
                    return res.status(500).json({
                        message: 'Error when getting Event.',
                        error: err
                    });
                }

                return res.render('events/list', {events: Events, categories: Categories});
            });
        })

    },
    /**
     * EventController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        EventModel.findOne({_id: id}, function (err, Event) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Event.',
                    error: err
                });
            }
            if (!Event) {
                return res.status(404).json({
                    message: 'No such Event'
                });
            }
            return res.json(Event);
        });
    },
/** get from searchEngine
 * */
    searchEngine: function (req, res) {
        var input = req.body.query;

        console.log(req.body)

    //Search(input)

    EventModel.findOne({_id: id}, function (err, Event) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Event.',
                    error: err
                });
            }
            if (!Event) {
                return res.status(404).json({
                    message: 'No such Event'
                });
            }
            return res.json(Event);
        });
    },



    /**
     * EventController.showDetails()
     */
    showDetails : function (req, res){
        var id = req.params.id;
        EventModel.findOne({_id: id}, function (err, Event) {
          if (err) {
              return res.status(500).json({
                message: 'Error when getting Event.',
                error: err
          });
        }
        if (!Event) {
          return res.status(404).json({
              message: 'No such Event'
          });
        }
        res.render("detail", {
            username: Session.username,
            id: Session._id,
            company:Session.company,
            name: Event.name,
            s_date : Event.s_date,
            end_date : Event.end_date,
            place_map : Event.place_map,
            adress : Event.adress,
            wilaya : Event.wilaya,
            needs : Event.needs,
            eventDescription : Event.eventDescription,
        });
      });
    } ,
    getCreatePage: function(req, res){
      return res.render('events/create')
    },

    /**
     * EventController.create()
     */
    create: function (req, res) {
        console.log(req.body)
        var Event = new EventModel({
          name : req.body.name,
			s_date : req.body.s_date,
			end_date : req.body.end_date,
			place_map : req.body.place_map,
			adress : req.body.adress,
			wilaya : req.body.wilaya,
			needs : req.body.needs,
			participent : req.body.participent,
			pendingParticipents : req.body.pendingParticipents
        });
        Event.publisher = req.user;

        Event.save(function (err, Event) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Event',
                    error: err
                });
            }
            return res.status(201).json(Event);
        });
    },

    /**
     * EventController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        EventModel.findOne({_id: id}, function (err, Event) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Event',
                    error: err
                });
            }
            if (!Event) {
                return res.status(404).json({
                    message: 'No such Event'
                });
            }

            Event.s_date = req.body.s_date ? req.body.s_date : Event.s_date;
			Event.end_date = req.body.end_date ? req.body.end_date : Event.end_date;
			Event.place_map = req.body.place_map ? req.body.place_map : Event.place_map;
			Event.adress = req.body.adress ? req.body.adress : Event.adress;
			Event.wilaya = req.body.wilaya ? req.body.wilaya : Event.wilaya;
			Event.needs = req.body.needs ? req.body.needs : Event.needs;
			Event.participent = req.body.participent ? req.body.participent : Event.participent;
			Event.pendingParticipents = req.body.pendingParticipents ? req.body.pendingParticipents : Event.pendingParticipents;
            Event.save(function (err, Event) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Event.',
                        error: err
                    });
                }

                return res.json(Event);
            });
        });
    },

    /**
     * EventController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        EventModel.findByIdAndRemove(id, function (err, Event) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Event.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    },
    /**
      * API controllers
      */
    getLatestEvents: function(req, res) {
      EventModel.find({end_date: {"$lt": Date.now()}}, function(err, Events){
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the Event.',
                error: err
            });
        }
        var events = Events.slice(0, 9);
        return res.json(events);
      });
    },

    getEvent: function(req, res) {
        var uid = req.params.uid;
        EventModel.findOne({uid : uid}, function(err, Event){
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the Event.',
                error: err
            });
        }
        return res.json(Event);
      })
    }
};
