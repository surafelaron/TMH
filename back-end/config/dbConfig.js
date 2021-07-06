const mongoose = require("mongoose");

const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
            mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
            console.log("db connected")
          })
    } catch (error) {
        console.error("db connection failed!!")
    }
}

module.exports = connectDB;