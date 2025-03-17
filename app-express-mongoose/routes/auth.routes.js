const express = require('express');
const User = require('../models/user');
const router = express.Router();
require('dotenv').config()

const jwt = require('jsonwebtoken')

router.post('/register', async function(req, res)  {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });  // user = new User(req.body);
        await user.save();
        res.status(201).send({ message: "User saved successfully",user });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        const isHavePassword = await user.comparePassword(password);
        if (!isHavePassword) {
            return res.status(400).send({ message: "Invalid password" });
        }

        const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY);
        res.send({ message: 'User logged successfully', token });

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});
module.exports = router;
