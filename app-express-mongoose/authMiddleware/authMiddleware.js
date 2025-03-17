const jwt= require('jsonwebtoken')
require('dotenv').config()

const authMiddleware = async (req,res,next)=>{
    try{
        const token = req.header('Authorization').replace('Bearer ','')
        const decoded = jwt.verify(token,process.env.SECRET_KEY)
        console.log(decoded)
        next()
    }catch(error){
        res.status(401).send({error:'Please authenticate'})
    }
}

module.exports=authMiddleware