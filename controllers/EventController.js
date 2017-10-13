var EventModel = require('../models/EventModel.js');

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
      EventModel.find(function(err, Events){
        if (err) {
            return res.status(500).json({
                message: 'Error when getting Event.',
                error: err
            });
        }
        return res.render('events/list', {title: 'Events', events: Events});
      });
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

    /**
     * EventController.create()
     */
    create: function (req, res) {
        var Event = new EventModel({			s_date : req.body.s_date,			end_date : req.body.end_date,			place_map : req.body.place_map,			adress : req.body.adress,			wilaya : req.body.wilaya,			needs : req.body.needs,			participent : req.body.participent,			pendingParticipents : req.body.pendingParticipents
        });

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

            Event.s_date = req.body.s_date ? req.body.s_date : Event.s_date;			Event.end_date = req.body.end_date ? req.body.end_date : Event.end_date;			Event.place_map = req.body.place_map ? req.body.place_map : Event.place_map;			Event.adress = req.body.adress ? req.body.adress : Event.adress;			Event.wilaya = req.body.wilaya ? req.body.wilaya : Event.wilaya;			Event.needs = req.body.needs ? req.body.needs : Event.needs;			Event.participent = req.body.participent ? req.body.participent : Event.participent;			Event.pendingParticipents = req.body.pendingParticipents ? req.body.pendingParticipents : Event.pendingParticipents;
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
    }
};
