const express = require('express')
const mongodbCon = require('./config/dbConfig')
const dotenv = require('dotenv')
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose")
// const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users")
const commentsRoute = require("./routes/comments")

dotenv.config()

mongodbCon();

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(helmet());
app.use(morgan("common"));


app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute)
app.use("/api/comments", commentsRoute);

app.listen(PORT, ()=> console.log(`app listinig on ${PORT}`));