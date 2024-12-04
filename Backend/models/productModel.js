const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: Number,
    title: {
        type: String,
        unique: true
    },
    description: String,
    category: String,
    price: Number,
    rating: Number,
    stock: Number,
    brand: String,
    images: [String],
    thumbnail: String,
    quantity: Number,
    tags: [String]
})

module.exports = mongoose.model('Products', productSchema);