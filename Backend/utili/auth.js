const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config()
const secretKey = process.env.SECRET_KEY;

exports.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}

exports.comparePassword = async (inputPassword, originalPassword) => {
    return await bcrypt.compare(inputPassword, originalPassword);
}

exports.createToken = async (user) => {
    return await jwt.sign(user, secretKey, { expiresIn: '1h' });
}

exports.authMiddleware = (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token || token === 'Bearer') {
            console.log(token);
            return res.status(402).send('Access denied, access token missing');
        }
        else {
            const verified = jwt.verify(token, secretKey);
            if (verified) {
                req.user = verified;
                next();
            }
            else {
                return res.status(401).send('Access denied, invalid access token');
            }
        }
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
}

