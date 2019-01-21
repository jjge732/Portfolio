const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.Portfolio
            .find(req.query)
            .sort({_id: 1})
            .populate('screenshotLinks')
            .then(dbModel => {res.json(dbModel)})
            .catch(err => res.status(422).json(err));
    },
    findByUsername: (req, res) => {
        db.Portfolio
            .find({user: req.params.user})
            .populate('screenshotLinks')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createPortfolio: (req, res) => {
        db.Portfolio
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updatePortfolio: (req, res) => {
        db.Portfolio
            .findOneAndUpdate(req.params.user, {$push: req.body})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    remove: (req, res) => {
        db.Portfolio
            .findById(req.body)
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}
