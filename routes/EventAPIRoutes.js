var express = require('express');
var router = express.Router();
var EventController = require('../controllers/EventController.js');

/*
 * GET
 */
router.get('/latest', EventController.getLatestEvents);


module.exports = router;
