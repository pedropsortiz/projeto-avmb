require('dotenv').config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://user123:user123@cluster0.erk1ekl.mongodb.net/?retryWrites=true&w=majority", {
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