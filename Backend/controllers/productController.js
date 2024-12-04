const Product = require('../models/productModel.js');

exports.getProducts = async (req, res) => {
    try {
        const myProducts = await Product.find({ tags: { $nin: ['isDeleted'] } });
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(myProducts);
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
}

exports.getRemovedProducts = async (req, res) => {
    try {
        const myProducts = await Product.find({ tags: { $in: ['isDeleted'] } });
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(myProducts);
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
}

exports.createProduct = async (req, res) => {
    try {
        const myProduct = await Product.create(req.body);
        res.status(201).json(myProduct);
    } catch (err) {
        console.log(err);
        res.status(402).send(err.msg);
    }
}

exports.editProduct = async (req, res) => {
    try {
        const newProduct = req.body
        const updatedProduct = await Product.findOneAndUpdate({ title: newProduct.title }, newProduct, { new: true });
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.send(err.message);
    }
}

exports.removeProduct = async (req, res) => {
    try {
        const product = req.body;
        const removedProduct = await Product.findOneAndUpdate({ title: product.title }, { tags: 'isDeleted' });
        res.status(200).json({ successMsg: 'Product removed' });
    } catch (err) {
        res.send(err.message);
    }
}

exports.getFiltertedProducts = async (req, res) => {
    try {
        let filteredProducts;
        let sortByValue;
        if (!req.body.maxPrice) {
            req.body.maxPrice = 10000;
        }
        if (req.body.sortBy === "best") {
            sortByValue = "-rating";
        } else if (req.body.sortBy === "alpha-asc") {
            sortByValue = "title";
        } else if (req.body.sortBy === "alpha-desc") {
            sortByValue = "-title";
        } else if (req.body.sortBy === "price-asc") {
            sortByValue = "price";
        } else if (req.body.sortBy === "price-desc") {
            sortByValue = "-price";
        } else if (req.body.sortBy === "date-asc") {
            sortByValue = "id";
        } else if (req.body.sortBy === "date-desc") {
            sortByValue = "-id";
        }
        if (req.body.availability.inStock && req.body.availability.outOfStock) {
            if (req.body.categories){
                filteredProducts = await Product.find({ $and: [{ price: { $gte: req.body.minPrice } }, { price: { $lte: req.body.maxPrice } }, { category: { $in: req.body.categories } }] }).sort(sortByValue);
            } else {
                filteredProducts = await Product.find({ $and: [{ price: { $gte: req.body.minPrice } }, { price: { $lte: req.body.maxPrice } }] }).sort(sortByValue);
            }
        } else if (req.body.availability.inStock) {
            if (req.body.categories){
                filteredProducts = await Product.find({ $and: [{ price: { $gte: req.body.minPrice } }, { price: { $lte: req.body.maxPrice } }, { stock: { $gt: 0 } }, { category: { $in: req.body.categories } }] }).sort(sortByValue);
            } else {
                filteredProducts = await Product.find({ $and: [{ price: { $gte: req.body.minPrice } }, { price: { $lte: req.body.maxPrice } }, { stock: { $gt: 0 } }] }).sort(sortByValue);
            }
        } else if (req.body.availability.outOfStock) {
            if (req.body.categories){
                filteredProducts = await Product.find({ $and: [{ price: { $gte: req.body.minPrice } }, { price: { $lte: req.body.maxPrice } }, { stock: 0 }, { category: { $in: req.body.categories } }] }).sort(sortByValue);
            } else {
                filteredProducts = await Product.find({ $and: [{ price: { $gte: req.body.minPrice } }, { price: { $lte: req.body.maxPrice } }, { stock: 0 }] }).sort(sortByValue);
            }
        } else {
            if (req.body.categories.length){
                filteredProducts = await Product.find({ $and: [{ price: { $gte: req.body.minPrice } }, { price: { $lte: req.body.maxPrice } }, { category: { $in: req.body.categories } }] }).sort(sortByValue);
            } else {
                filteredProducts = await Product.find({ $and: [{ price: { $gte: req.body.minPrice } }, { price: { $lte: req.body.maxPrice } }] }).sort(sortByValue);
            }
        }
        res.status(200).json(filteredProducts);
    } catch (err) {
        res.status(400).send(err.msg);
    }
}

// module.exports = getProducts();