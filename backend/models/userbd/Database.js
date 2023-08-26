const mongoose = require("mongoose");

const databaseSchema = new mongoose.Schema({
    host: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    pwd: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true,
    },
    port: {
        type: String,
        required: true,
    }
});

const Database = mongoose.model('Database', userSchema);

module.exports = Database;
