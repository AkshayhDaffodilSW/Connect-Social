
const express = require("express")
const router = express.Router()

router.get("/" , (req , res) => {
    if(!req.session || !req.session.user){
        res.status(300);
    }
    else{
        console.log("kya bhai");
        res.status(200);
    }
    res.end();
})

module.exports = router;    