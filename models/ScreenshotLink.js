const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const screenshotLinkSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: true,
        unique: true
    },
    urlLink: {
        type: String,
        required: true,
        unique: true
    }
});

const ScreenshotLink = mongoose.model('ScreenshotLink', screenshotLinkSchema);

module.exports = ScreenshotLink;