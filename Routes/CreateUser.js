const express = require("express")
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWTSECRET;

router.post("/createuser",
    [
        body('email', "please provide vaild email").isEmail(),
        body('name', "minimun 5 letters").isLength({ min: 5 }),
        body('password', "provide valid password minimun 6 letters").isLength({ min: 6 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        let securePassword = await bcrypt.hash(req.body.password, salt)
        try {
            await User.create({
                    name: req.body.name,
                    password: securePassword,
                    email: req.body.email,
                    location: req.body.location
                });
            res.status(201).json({ success: true, message: "User created successfully" });

        } catch (error) {
            console.log(error)
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }

    })



router.post("/loginuser",
    [
        body('email', "please provide vaild email").isEmail(),
        body('password', "provide valid password minimun 6 letters").isLength({ min: 6 })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let email = req.body.email;
        try {
            let userData = await User.findOne({ email });
            if (!userData) {
                return res.status(400).json({ success: false, error: "Try logging in again with correct credentials" });

            }

            const pwdCompare = await bcrypt.compare(req.body.password,userData.password)
            if (!pwdCompare) {
                return res.status(400).json({ success: false, error: "Try logging in again with correct credentials" });

            }

            const data = {
                user:{
                    id:userData.id
                }
            }
            const authToken = jwt.sign(data,jwtSecret)
            return res.json({ success: true,authToken })

        } catch (error) {
            console.log(error)
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }

    })

module.exports = router;