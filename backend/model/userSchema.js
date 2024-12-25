const mongoose = require('mongoose');
const bycrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true, 'Please Provide a name'],
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please provide a valid email'], // this is used for regular expression matching
        unique:true //By setting the email field as unique, you ensure that no two users can register with the same email address. 
                    //This maintains the integrity of your user data.
    },
    password:{
        type:String,
        required:[true, 'Please Provide a password'], // the passwords will always be hashed in the database, and this hased value is checked
        minLength:6,

    }
})

userSchema.pre('save', async function(next){
    const salt = await bycrypt.genSalt(10);
    this.password = await bycrypt.hash(this.password, salt);
    next(); // passing the middleware to the next function
})

userSchema.methods.comparePassword = async function(candidatePassword){

    const isMatch = await bycrypt.compare(candidatePassword, this.password)
    return isMatch
}


module.exports = mongoose.model('User', userSchema)