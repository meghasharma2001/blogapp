
const mongoose = require("mongoose"); 

const userschema = new mongoose.Schema({

    username : {
        type:String,
        required : [true,"username is must"] 
    },
    email : { 
        type:String,
        required : [true , "email is required"]
    },

    password : {
        type:String,
        required : [true , "password is required"]
    }  


}, {timestamps:true})         

const usermodel = mongoose.model("User" , userschema)  

module.exports = usermodel ;


