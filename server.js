import express from'express'
import mongodbCon from './back-end/config/dbConfig.js'
import dotenv from 'dotenv'
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose"
// const userRoute = from("./routes/users");
// import authRoute  from "./back-end/routes/auth";
import users from "./back-end/routes/users.js";
// import commentsRoute from "./back-end/routes/comments"
dotenv.config()

const app = express();
const PORT = process.env.PORT || 8000

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(helmet());
app.use(morgan("common"));

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// app.use("/api/auth", authRoute);
app.use("/api/users", users)
// app.use("/api/comments", commentsRoute);

app.listen(PORT, ()=> console.log(`app listinig on ${PORT}`));