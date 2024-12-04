const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email'],
        required: true
    },
    username: String,
    password: {
        type: String,
        required: true,
    },
    role: String
})

module.exports = mongoose.model('Users', userSchema);