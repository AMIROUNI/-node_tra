const express = require('express');
const User = require('../models/user');
const router = express.Router();
const authenticate=require('../authMiddleware/authMiddleware')

const user.controller=require('../controllers/user.controller')

router.post('/create', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send({message: 'user saved successfully', user});
    } catch (error) {
        res.status(500).send({error});
    }
});




router.post('/register',user.controller.addUser)










router.get('/me',authenticate,async (req,res)=>{
   try{
    console.log("running.........")
     const user =await User.findById(req.user.userId).select('-password');
    if(!user){
        res.status(404).send({message:'User not found'});
    }
    res.send(user)

   }catch(error){
    res.status(500).send({message:error.message})
   };
    
})

router.get('/all', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({error});
    }
});

router.get('/find/:name', async (req, res) => {
    try {
        const user = await User.findOne({ name: req.params.name });
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).send({message: 'user not found'});
        }
    } catch (error) {
        res.status(500).send({error});
    }
});


router.put('/update/:name', async (req, res) => {
    try {
        const name= req.params.name
        const user =await User.findOne({name})
        if(!user){
            res.status(404).send({message: 'user not found'});
        }


        await User.findOneAndUpdate({name},{set:{name:req?.body?.name || 'ali'}},{new:true})
        res.status(200).send({message: 'user updated successfully', user});

    }catch(error){
        res.status(500).send({error});
    }
});



    
router.delete('/delete/:name', async (req, res) => {
    try {
        const name= req.params.name
        const user =await User.findOne({name})
        if(!user){
            res.status(404).send({message: 'user not found'});
        }


       await User.deleteOne({name})
        res.status(200).send({message: 'user deleted successfully', user});

    }catch(error){
        res.status(500).send({error});
    }

        


});

module.exports = router;
