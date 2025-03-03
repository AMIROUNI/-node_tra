const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');






const userSchema = new mongoose.Schema({
    name: {
        type: String,
        
        minlength: 3,
        maxlength: 20
    },
    email: {
        type: String,
        
        unique: true
    },
    age: {
        type: Number,
   
    },

    password: {
        type: String,
        
        minlength: 6
    }
}



);



userSchema.pre('save',async (next)=>{
    if(!this.isModified('password')){

        this.password= await bcryptjs.hash(this.password,10)
        return next();
       
    }
})

userSchema.method.comparePassword=(userPassword)=>{
    return bcryptjs.compare(userPassword,this.password)
}


module.exports = mongoose.model('User', userSchema);
// Compare this snippet from app-express-mongoose/server.js:

