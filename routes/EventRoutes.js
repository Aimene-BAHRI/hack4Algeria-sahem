var express = require('express');
var router = express.Router();
var EventController = require('../controllers/EventController.js');

/*
 * GET
 */
router.get('/', EventController.listAllEvents);

/**
  * Create event
  */
router.get('/create', EventController.getCreatePage);
router.post('/create', EventController.create);

/*
 * GET
 */
router.get('/:uid', EventController.showDetails);

/*
 * POST
 */
router.post('/', EventController.create);

/*POST
 *
 * */
router.post('/', EventController.searchEngine);

/*
 * PUT
 */
router.put('/:id', EventController.update);

/*
 * DELETE
 */
router.delete('/:id', EventController.remove);

module.exports = router;
