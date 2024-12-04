const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js');
const { authMiddleware } = require('../utili/auth.js');

router.get('/', productController.getProducts);

router.post('/filters', productController.getFiltertedProducts);

router.post('/dashboard', productController.createProduct);
router.put('/dashboard', authMiddleware, productController.editProduct);
router.delete('/dashboard', authMiddleware, productController.removeProduct);
module.exports = router;