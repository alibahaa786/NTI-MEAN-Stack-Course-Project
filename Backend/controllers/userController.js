const User = require('../models/userModel.js');
const auth = require('../utili/auth.js');

exports.createUser = async (req, res) => {
    let newUser = new User(req.body);
    newUser.password = await auth.hashPassword(newUser.password);
    newUser.role = 'customer';
    try {
        checkUser = await User.findOne({email: newUser.email});
        if (checkUser) {
            res.json({errorMsg: 'Email already registered'})
        } else {
            await newUser.save();
            const user = newUser;
            const userToken = await auth.createToken({user});
            // const response = {userToken};
            res.status(200).json(userToken);
        }
    } catch (err) {
        res.status(400).send(err.message);
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const legitUser = await User.findOne({ email });
    if (!legitUser) {
        res.status(400).send('Email or password is incorrect');
    } else {
        const isMatch = await auth.comparePassword(password, legitUser.password);
        if (isMatch) {
            const user = legitUser
            const userToken = await auth.createToken({user});
            // const response = {userToken};
            res.status(200).json(userToken);
        } else {
            res.status(400).send('Email or password is incorrect');
        }
    }
}
