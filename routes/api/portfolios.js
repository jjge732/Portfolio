const router = require('express').Router();
const portfoliosController = require('../../controller/portfoliosController');

router.route('/')
    .get(portfoliosController.findAll)
    .post(portfoliosController.create);

router.route('/:id')
    .get(portfoliosController.findById)
    .put(portfoliosController.update)
    .delete(portfoliosController.remove);

module.exports = router;