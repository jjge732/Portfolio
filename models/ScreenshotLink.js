const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const screenshotLinkSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

const ScreenshotLink = mongoose.model('ScreenshotLink', screenshotLinkSchema);

module.exports = ScreenshotLink;