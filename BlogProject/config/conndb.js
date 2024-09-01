
const mongoose = require("mongoose");
const colors = require("colors");

const connectdb = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);

        console.log(` mongo connection success ${mongoose.connection.host} `.bgGreen.random);
    }
    catch(error){
        console.log("mongo connection error" + error);
    }
}

module.exports = connectdb ; 