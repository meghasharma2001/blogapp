const express = require("express");
const { getAllUsers, registeruser, loginuser } = require("../controllers/usercontroller");


const router = express.Router(); 

// GET ALL USERS
 router.get("/allusers",getAllUsers)  

//CREATE USER || POST

router.post("/register" , registeruser);

// LOGIN USER || POST
router.post("/login" , loginuser); 


module.exports = router ;