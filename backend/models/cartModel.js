const mongoose = require('mongoose');

// setting up the data storing in expense models
const CartSchema = new mongoose.Schema({
    itemID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    itemCount: {
        type: String,
    }
}, {timestamps: true})

module.exports = mongoose.model('Cart', CartSchema)