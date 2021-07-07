const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create user
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err)
    console.log(err)
  }
});

// LOGIN
router.post('/login', async (req,res) => {
    try{
        const user = await User.findOne({email: req.body.email});
        if(!user) return res.status(400).send('Email is not found');
        const pass = await bcrypt.compare(req.body.password, user.password)
        if(!pass) return res.status(400).send("incorrect password");
        const token = await jwt.sign({_id: user._id}, process.env.SECRET_TOKEN)
        res.header('auth-token', token).send(token)
    } catch(error){
        res.status(501).json(error)
        console.log(error)
    }
})

module.exports = router;