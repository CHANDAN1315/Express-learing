const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true, // it tell us if we don't give this entry then it will not inserted in the db
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String
    }
}, { timestamps: true })

const User = mongoose.model('user', userSchema); // it is a user object or a user class find out 

module.exports = User;