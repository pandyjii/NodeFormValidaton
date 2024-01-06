
const express=require('express');
const FormController=require('../Conteroller/Form');


const router=express.Router();

router
 .post('/',FormController.createInfo)


exports.router=router;



