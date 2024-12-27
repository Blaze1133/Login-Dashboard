const jwt = require('jsonwebtoken')

const authMiddleware = async(req,res,next) =>{
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new Error('No token provided')
    }
    const token = authHeader.split(' ')[1]; 
    try{
        jwt.verify(token,process.env.SECRET_KEY)
        next();
    }catch(error){
        throw new Error('Not authorized to access this route')
    }
}

module.exports = authMiddleware