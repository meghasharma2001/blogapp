

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv"); 
const connectdb = require("./config/conndb");



dotenv.config({path:"./.env"}); 
const userRoutes  = require("./routes/userroutes");

connectdb();



const PORT = process.env.PORT||8080; 
const app = express(); 


app.use(cors());
app.use(express.json()); 
app.use(morgan("dev")); 


app.use("/api/v1/user" , userRoutes)  


app.listen(PORT , ()=>{
    console.log(`server running on ${process.env.DEV_MODE} port ${PORT}`.bgMagenta.yellow)
})
