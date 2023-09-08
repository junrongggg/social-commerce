const mongoose = require('mongoose');

// setting up the data storing in expense models
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    price: {
        type: Number,
        required: true,
        maxLength: 20,
        trim: true
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    imageAlt: {
        type: String,
    }
}, {timestamps: true})

module.exports = mongoose.model('Product', ProductSchema)