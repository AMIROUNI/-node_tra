const mongoose = require('mongoose');
 

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
   
    }
}



);


module.exports = mongoose.model('User', userSchema);
// Compare this snippet from app-express-mongoose/server.js:

