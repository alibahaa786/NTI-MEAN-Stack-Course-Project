const mongoose = require('mongoose');
const connectDB = async()=> {
    mongoose.connect("mongodb://127.0.0.1:27017/courseProject");
    console.log("Connected to DB");
}

module.exports = connectDB;