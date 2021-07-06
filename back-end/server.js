const express = require('express')
const mongodbCon = require('./config/dbConfig')

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended: true}));
app.use(express.json())

mongodbCon();

app.get('/', (req,res) =>{
    res.send('<h1> hi there </h1>')
})

app.listen(PORT, ()=> console.log(`app listinig on ${PORT}`));