import express from'express'
import dotenv from 'dotenv'
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose"
import articles  from "./back-end/routes/articles.js";
import users from "./back-end/routes/users.js";
import multer from "multer";
import path from "path";

dotenv.config()

const app = express();
const PORT = process.env.PORT || 8000

const __dirname = path.resolve(path.dirname(decodeURI(new URL(import.meta.url).pathname)));

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(helmet());
app.use(morgan("common"));
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify:true
})
.then(console.log("db connected!!"))
.catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/users", users)
app.use("/api/posts", articles)

app.listen(PORT, ()=> console.log(`app listinig on ${PORT}`));