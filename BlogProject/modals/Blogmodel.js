

const mongoose = require("mongoose");

const blogschema = new mongoose.Schema({

    title : {
        type : String,
        required : [true , "title is require"]  
    },

    description : {
        type: String,
        required : [true, "description is require"]
    },

    image : {
        type:String,
        required : [true , "img is require"]
    }

}, 

{timestamp : true}
)


const blogmodel = mongoose.model("Blog" , blogschema);

module.exports = blogmodel ;