const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    // products: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Product',
    // }],
    userEmail: {
        type: String
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Products'
        },
        quantity: Number
    }]
})

module.exports = mongoose.model("Carts", cartSchema);