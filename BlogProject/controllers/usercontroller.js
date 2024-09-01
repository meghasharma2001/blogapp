

const usermodel = require("../modals/usersmodal");
const bcrypt = require("bcrypt"); // import pkg




exports.registeruser = async(req,res) =>{
    try{

        const {username , email , password} = req.body ;  

        // validation 
        if(!username || !email || !password){
            return res.status(400).send({ 
                msg : "please fill all fields",
                success : false
            })
        }

        

        const existinguser = await usermodel.findOne({email});

        if(existinguser){
            return res.status(401).send({msg : "user already exist with this email" ,
                success : false
            })
        }


        const hashedpassword = await bcrypt.hash(password ,  10); 

        // save new user

        const user = new usermodel({username , email , password : hashedpassword  });  

        await user.save(); 
        return res.status(201).send({msg : "user create successfully" ,
            success:true,
            user 
        }) 




    }
    catch(error){

        console.log(error)
        return res.status(500).send({msg : "error in register callback",
            success:false,
            error  
        })
    }


} ; 

exports.getAllUsers = async(req,res) =>{
    
    try{


        const userdata =  await usermodel.find({}) ; // find all users 

        return res.status(200).send({
            userlength : userdata.length,
            msg : "all users get successfully",
            success : true,
            userdata
        })

    }catch(error){
    console.log(error);

    return res.status(500).send({
        msg : "error in get all users callback",
        success : false,
        error
    })
    }
} ;  
exports.loginuser = async(req,res) =>{

    try{
        

        const {email,password} = req.body ; 
        if(!email || !password){  
            return res.status(401).send({
                msg : "please provide email or password",
                success : false
            })
        }


        const user = await usermodel.findOne({email});

        if(!user){

            return res.status(200).send({
                msg:"email is not registered",
                success : false
            })
        }



const passmatch = await bcrypt.compare(password , user.password);

if(!passmatch)
{
    res.status(401).send({
        msg : "email and password wrong",
        success : false
    })
}


return res.status(200).send({
    success :  true ,
    msg : "login successfully",
    user  
})

    }catch(error){

        console.log(error);
        res.status(500).send({
            msg : "error in login callback",
            success : false,
            error
        })
    }
};













