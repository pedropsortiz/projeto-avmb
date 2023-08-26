const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    pwd: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true,
        unique: true
    },
    permission: {
        type: String,
        enum: ['adm', 'usr'],
        default: 'usr'
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
