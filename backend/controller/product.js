const User = require('../model/userSchema')
const registerUser = async(req,res) => {
    const user = await User.create(req.body)
    res.status(201).json({user,msg:"User registered successfully"})

}

const loginUser = async(req,res) => {
    const {email,password} = req.body
    if(!email || !password){
        return res.status(400).json({message:"All fields are required"})
    }

    const user = await User.findOne({email})
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    const isMatch = await user.comparePassword(password)
    if(!isMatch){
        return res.status(401).json({message:"Invalid credentials"})
    }
    res.status(200).json({user, msg : "Login successful"})



}

module.exports = {registerUser,loginUser}