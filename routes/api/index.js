const router = require('express').Router();
const portfolioRoutes = require('./portfolios');

router.use('/portfolios', portfolioRoutes);

module.exports = router;