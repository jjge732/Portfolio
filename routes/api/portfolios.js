const router = require('express').Router();
const portfoliosController = require('../../controller/portfoliosController');

router.route('/')
    .get(portfoliosController.findAll)
    .post(portfoliosController.createPortfolio);

router.route('/:user')
    .get(portfoliosController.findByUsername)
    .put(portfoliosController.updatePortfolio)
    .patch(portfoliosController.updateBrandStatement)
    .delete(portfoliosController.remove);

module.exports = router;