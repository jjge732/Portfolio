const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true,
        unique: true
    },
    gitHub: String,
    linkedIn: String,
    // backgroundImage: {
    //     type: String,
    //     default: ''
    // },
    brandStatement: {
        type: String,
        required: true
    },
    dateObtained: {
        type: Date,
        default: Date.now()
    },
    screenshotLinks : [{
        type: Schema.Types.ObjectId,
        ref: 'ScreenshotLink'
    }]
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;