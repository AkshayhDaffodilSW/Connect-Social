const express = require('express');
const router = express.Router();

const posts = require('../models/posts');

router.post("/" , async (req , res) =>{
    try {
        const post = new post({
            _id: mongoose.Schema.Types.ObjectId,
            url:req.body.url,
            text:req.body.text,
            email:req.body.email,
            parentPost:req.body.parent
        })
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
})

exports.module = router;