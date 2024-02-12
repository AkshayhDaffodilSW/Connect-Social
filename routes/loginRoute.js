// loginRoute.js
const express = require('express');
const router = express.Router();
const user = require('../models/user');
const hash = require('pbkdf2-password')();

router.post("/", async (req, res) => {
    console.log(req.session);
    try {
        const users = await user.findOne({ email: req.body.email });
        let response;
        if (!users) {
            response = {
                message: "Wrong email",
                code: 13,
            };
        } else {
            hash({ password: req.body.pass, salt: users.salt }, function (err, pass, salt, hash) {
                if (err) throw err;
                if (hash !== users.hash) {
                    response = {
                        message: "Wrong password",
                        code: 14,
                    };
                } else {
                    console.log("P_P");
                    response = {
                        message: "Authenticated user",
                        code: 15,
                    };
                    req.session.user = newUser;

                    console.log(req.session);
                }
                res.json(response);
            });
            return;
        }
        res.json(response);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
