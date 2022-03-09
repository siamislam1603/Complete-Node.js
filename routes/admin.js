const express=require('express');
const path=require('path');
const shopModule=require('./shop');

const router=express.Router();

router.get('/',(req,res,next)=>{
    res.render('shop',{products:shopModule.products});
});

module.exports=router;