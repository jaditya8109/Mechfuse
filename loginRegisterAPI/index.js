const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const User = require("./models/User");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, ()=>{
    console.log("DB Connected!");
})

// middlwware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/", (req, res)=>{
    res.send("Homepage");
})

app.post("/register", async (req,res)=>{
    try{
        const newUser =  new User({
            username: req.body.username,
            password: req.body.password
        });
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
        console.log(err);
    }
});

app.post("/login", async(req,res)=>{
    try{
        const user = await User.findOne({username: req.body.username});
        !user && res.status(404).send("User not found");

        const password = await User.findOne({password: req.body.password});
        !password && res.status(404).send("Wrong password entered");

        res.status(200).json(user);

    }catch(err){
        res.status(500).json(err);
        console.log(err)
    }
});

app.get("/logout", async (req,res)=>{
    await res.cookie('user', 'none', {
        expires: new Date(Date.now() + 1 * 1000),
        httpOnly: true,
    })

    res.status(200).json({ success: true, message: 'User logged out successfully' })
})

app.listen(8800, ()=> {
    console.log("backend server running");
} );