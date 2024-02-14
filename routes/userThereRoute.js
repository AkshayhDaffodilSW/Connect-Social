const express = require('express');
const router = express.Router();

router.post("/" , (req , res) => {
    if(!req.session.user){
        res.status(300);
    }
    else{
        res.status(200);
    }
    res.end();
})

module.exports = router;