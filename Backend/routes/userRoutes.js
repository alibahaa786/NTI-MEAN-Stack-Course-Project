const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const auth = require('../utili/auth.js')

router.post('/signup', userController.createUser);
router.post('/login', userController.login);

module.exports = router;