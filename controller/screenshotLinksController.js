const db = require('../models');

module.exports = {
    createScreenshotLink: (req, res) => {
        db.ScreenshotLink
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        }
}