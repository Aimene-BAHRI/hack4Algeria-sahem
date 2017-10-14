var express = require('express');
var router = express.Router();
var EventController = require('../controllers/EventController.js');

/*
 * GET
 */
router.get('/latest', EventController.getLatestEvents);
router.get('/get/:uid', EventController.getEvent);


module.exports = router;
