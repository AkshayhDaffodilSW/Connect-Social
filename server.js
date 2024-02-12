const express = require('express')
const app = express();
app.listen(5000);
app.use(express.json());

const users = require("./user");
app.post("/register" , (req ,res) => {
    // console.log(req.body);
    let response;
    if(users[req.body.email]){
        response = {
            message : "User already exists",
            code: 12,
            data : req.body
        }
    }
    else{
        response = {
            message : "new user to created",
            code: 11,
            data : req.body
        }
    }
    res.json(response);
})
app.post("/login" , (req ,res) => {
    console.log(req.body);
    let response;
    if(!users[req.body.email]  || (users[req.body.email].password  !== req.body.pass)){
        response = {
            message : "wrong email",
            code: 13,
            data : req.body
        }
    }
    else{
        response = {
            message : "Authenticated user",
            code: 14,
            data : req.body
        }
    }
    res.json(response);
})







