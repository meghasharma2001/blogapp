const express = require("express");



const router = express.Router();



router.get("/allblogs" , getAllblogsController); 

//GET ONE BLOG || GET
router.get("/getblog/:id" , getOneblogByIdContoller)


// create blogs || POST
router.post("/createblog" , createBlogController);

// update blog || PUT
router.put("/updateblog/:id" , updateBlogController)  

// delete blog || DELETE
router.delete("/deleteblog/:id" , deleteBlogController)

module.exports =  router ;