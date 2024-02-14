const express = require('express');
const router = express.Router();

const posts = require('../models/posts');

router.post("/", async (req, res) => {
    try {
        if(!req.session.user){
            res.json({
                message:"no user to get post",
                code : 13
            }).end();
            return;
        }
        const post = await posts.find({ email: req.session.user.email });
        let response = {
            message: "posts found",
            code: 14,
            body : post
        };
        res.json(response);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error in putPostRoute" });
    }
});

module.exports = router;
