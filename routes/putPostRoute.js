const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); // Import mongoose

const posts = require('../models/posts');

router.post("/", async (req, res) => {
    let get = req.body.imgBuffer.toString("hex");
    console.log(get);
    try {
        const post = new posts({
            _id: new mongoose.Types.ObjectId(), 
            buffer: req.body.imgBuffer,
            text: req.body.comment,
            email: req.session.user.email,
            parentPost: req.body.parent
        });
        await post.save();
        let response = {
            message: "post added",
            code: 14,
            buffer:req.body.imgBuffer
        };
        res.json(response);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error in putPostRoute" });
    }
});

module.exports = router;
