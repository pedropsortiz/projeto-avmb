require('dotenv').config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true // Corrigido o nome da opção aqui
        });
        console.log("O MongoDB está ativo");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;