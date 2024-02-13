
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const homeRoute = require("./routes/homeRoute")
const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/loginRoute');
const session = require('express-session');

app.listen(5000);
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:"U_U O_O U_U"
})) 

app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/home" , homeRoute);


app.get("/logout" , (req , res) => {
    req.session.destroy();
})
