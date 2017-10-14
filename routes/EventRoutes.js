var express = require('express');
var router = express.Router();
var EventController = require('../controllers/EventController.js');

/*
 * GET
 */
router.get('/', EventController.listAllEvents);

/*
 * GET
 */
router.get('/:id', EventController.show);

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
