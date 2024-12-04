const Cart = require('../models/cartModel.js');

exports.getCart = async (req,res) => {
    try {
        userEmail = req.user.user.email;
        console.log(userEmail);
        const myCart = await Cart.findOne({userEmail: req.user.user.email}).populate('products.product');
        console.log(myCart);
        res.status(200).json(myCart.products);
    } catch (err) {
        res.status(400).send(err.message);
    }
}

exports.updateCart = async (req, res) => {
    try {
        let updatedCart = await Cart.findOneAndReplace({userEmail: req.user.user.email}, {userEmail: req.user.user.email, products: req.body});
        if (!updatedCart) {
            updatedCart = await Cart.create({userEmail: req.user.user.email, products: req.body});
        }
        console.log("ahlan");
        res.status(202).json(updatedCart.products);
    } catch(err) {
        console.log(err);
        res.status(400).send(err.message);
    }
}