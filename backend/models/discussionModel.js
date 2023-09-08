const mongoose = require('mongoose');

// setting up the data storing in expense models
const DiscussionSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    comments: {
        type: String,
    }
}, {timestamps: true})

module.exports = mongoose.model('Discussion', DiscussionSchema)