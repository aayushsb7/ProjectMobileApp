const mongoose = require('mongoose');

const orderItemSchema = mongoose.Schema({
    quantity: {
        type: Number,
        required: true
    },
    products: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }

})

exports.OrderItem = mongoose.model('OrderItem', orderItemSchema)