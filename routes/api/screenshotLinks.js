const router = require('express').Router();
const screenshotLinksController = require('../../controller/screenshotLinksController');

router.route('/')
    .post(screenshotLinksController.createScreenshotLink);

module.exports = router;