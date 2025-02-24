

const mongoose=require('mongoose');


const postSchema = new mongoose.Schema({

    title:String,
    content:String,
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'}
})



module.exports=mongoose.model('Post',postSchema)
// Compare this snippet from app-express-mongoose/user.js: