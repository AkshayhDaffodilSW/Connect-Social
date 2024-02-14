
const express = require('express');
const app = express();
require('dotenv').config();

const session = require('express-session');
const mongoose = require('mongoose');

const userThere = require("./routes/userThereRoute")
const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/loginRoute');
const getPostsRoute = require("./routes/getPostsRoute")
const putPostRoute = require("./routes/putPostRoute")

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
app.use("/userthere" , userThere);

app.use("/getposts" , getPostsRoute);
app.use("/putpost" , putPostRoute);

app.get("/logout" , (req , res) => {
    req.session.destroy();
})
