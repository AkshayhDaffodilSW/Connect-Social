const express = require('express');
const router = express.Router();

const posts = require('../models/posts');

router.get("/" , async (req , res) =>{
    try {
        const users = await user.find({ email: req.body.email});
        let response;
        if (!users) {
            response = {
                message: "Wrong email",
                code: 13,
            };
        } else {
            hash({ password: req.body.pass , salt:users.salt}, function (err , pass, salt, hash) {
                if (err) throw err;
                if (hash !== users.hash) {
                    response = {
                        message: "Wrong password",
                        code: 13,
                    };

                    res.json(response);
                } else {
                    response = {
                        message: "Authenticated user",
                        code: 14,
                    };
                    req.session.user = {
                        fName : users.f_name,
                        sName : users.s_name,
                        email : users.email
                    };
                }
                res.json(response);
            });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
})

exports.module = router;