const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const loginUser = mongoose.model('loginUser', loginSchema);

module.exports = loginUser;