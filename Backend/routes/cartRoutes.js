const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController.js');
const { authMiddleware } = require('../utili/auth.js');

router.get('/', authMiddleware, cartController.getCart);
router.put('/', authMiddleware, cartController.updateCart);

module.exports = router;