const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.Portfolio
            .find(req.query)
            .sort({_id: 1})
            .populate('screenshotLinks')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: (req, res) => {
        db.Portfolio
            .findById(req.id)
            .populate('screenshotLinks')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        db.Portfolio
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: (req, res) => {
        db.Portfolio
            .findOneAndUpdate(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    remove: (req, res) => {
        db.Portfolio
            .findById(req.body)
            .then(dbModel => db.Model.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}
