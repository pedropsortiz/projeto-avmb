require("dotenv").config()

const connectDB = require("./config/db")
const User = require("./models/userbd/User")
const Database = require("./models/userbd/Database")

connectDB();

const importData = async () => {
  try {
    await User.deleteMany({})
    await Database.deleteMany({})

    await User.insertMany(
        {
            name: "Admin",
            email: "admin@admin.com",
            pwd: "admin",
            login: "admin",
            permission: "adm",
        },
    )

    console.log("Dados importados com sucesso")

    process.exit()
  } catch (error) {
    console.error("Erro com a importação dos dados: " + error)
    process.exit(1)
  }
};

importData()