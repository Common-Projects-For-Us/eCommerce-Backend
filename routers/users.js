const {User} = require('../models/user');
const express = require('express');

const router = express.Router();

router.post('/', async(req, res) => {

    let user = new User({
        userName: req.body.userName,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNo: req.body.phoneNo
    })

    user = await user.save();

    if(!user){
        return res.status(400).send('The user cannot be created');
    }

    res.send(user);
});

router.get('/', async(req,res) => {

    const user = await User.find();

    if(!user){
        res.status(500).json({ message: 'The user Lists was not found' });
    }

    res.status(200).send(user);
})

router.get('/:id', async(req,res) => {

    const user = await User.findById(req.params.id);

    if(!user){
        res.status(500).json({ message: 'The user with the given ID was not found' });
    }

    res.status(200).send(user);
})

module.exports = router;


