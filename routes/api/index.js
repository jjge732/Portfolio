const router = require('express').Router();
const portfolioRoutes = require('./portfolios');
const screenshotLinkRoutes = require('./screenshotLinks');

router.use('/portfolios', portfolioRoutes);
router.use('/screenshotLinks', screenshotLinkRoutes);

module.exports = router;