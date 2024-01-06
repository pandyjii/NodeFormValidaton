
const express=require('express');
const server=express();
const app=express();
const PORT=8080;
// const Validation_From=require('./Model/Schema');
const mongoose = require('mongoose');
const Formroute=require('./Router/route');
// middleware

server.use(express.json());


// Databases 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/User');

  console.log("database connected")

}



server.use('/form',Formroute.router)








server.listen(PORT,(req,res)=>{
    console.log(`server is Running on port  ${PORT}`)
})