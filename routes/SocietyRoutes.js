var express = require('express');
var router = express.Router();
var SocietyController = require('../controllers/SocietyController.js');

/*
 * GET
 */
router.get('/', SocietyController.list);

/*
 * GET
 */
router.get('/:id', SocietyController.show);

/*
 * POST
 */
router.post('/', SocietyController.create);

/*
 * PUT
 */
router.put('/:id', SocietyController.update);

/*
 * DELETE
 */
router.delete('/:id', SocietyController.remove);

module.exports = router;
