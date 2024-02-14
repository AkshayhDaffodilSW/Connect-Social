const express = require('express');
const router = express.Router();
const user = require('../models/user');
const hash = require('pbkdf2-password')();
const mongoose = require('mongoose');

router.post("/", async (req, res) => {
    try {
        const existingUser = await user.findOne({ email: req.body.email });
        let response;
        if (existingUser) {
            response = {
                message: "User already exists",
                code: 12,
            };
            res.json(response);
        } else {
            hash({ password: req.body.pass }, async function (err, pass, salt, hash) {
                if (err) throw err;
                let newUser = new user({
                    _id: new mongoose.Types.ObjectId(),
                    f_name: req.body.name,
                    s_name: req.body.secondname,
                    email: req.body.email,
                    hash: hash,
                    salt: salt
                });
                try {
                        req.session.user = {
                            fName: newUser.f_name,
                            sName: newUser.s_name,
                            email: newUser.email
                        };
                        await newUser.save();
                        console.log("User saved successfully");
                        response = {
                            message: "User created successfully",
                            code: 11,
                        };
                        res.json(response);

                } catch (err) {
                    console.error("Error saving user:", err);
                    response = {
                        message: "Error saving user",
                        code: 500,
                    };
                    res.json(response);
                }
            });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;