import mongoose from "mongoose";

import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    
    try {
            console.log(process.env.DB_CONNECTION)
            mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
            console.log("db connected")
          })
    } catch (error) {
        console.error(error)
    }
}

 export default connectDB;