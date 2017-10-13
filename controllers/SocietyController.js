var SocietyModel = require('../models/SocietyModel.js');

/**
 * SocietyController.js
 *
 * @description :: Server-side logic for managing Societys.
 */
module.exports = {

    /**
     * SocietyController.list()
     */
    list: function (req, res) {
        SocietyModel.find(function (err, Societys) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Society.',
                    error: err
                });
            }
            return res.json(Societys);
        });
    },

    /**
     * SocietyController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        SocietyModel.findOne({_id: id}, function (err, Society) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Society.',
                    error: err
                });
            }
            if (!Society) {
                return res.status(404).json({
                    message: 'No such Society'
                });
            }
            return res.json(Society);
        });
    },

    /**
     * SocietyController.create()
     */
    create: function (req, res) {
        var Society = new SocietyModel({
        });

        Society.save(function (err, Society) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Society',
                    error: err
                });
            }
            return res.status(201).json(Society);
        });
    },

    /**
     * SocietyController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        SocietyModel.findOne({_id: id}, function (err, Society) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Society',
                    error: err
                });
            }
            if (!Society) {
                return res.status(404).json({
                    message: 'No such Society'
                });
            }

            Society.name = req.body.name ? req.body.name : Society.name;
            Society.save(function (err, Society) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Society.',
                        error: err
                    });
                }

                return res.json(Society);
            });
        });
    },

    /**
     * SocietyController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        SocietyModel.findByIdAndRemove(id, function (err, Society) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Society.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};