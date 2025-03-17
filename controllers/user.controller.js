const User = require('../models/user');


exports.addUser = async function (req, res) {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).send({ message: "User saved successfully", user });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
    
}

exports.getAllUsers = async function (req, res) {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ error });
    }
}   