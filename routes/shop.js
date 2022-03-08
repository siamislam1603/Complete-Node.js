const express=require('express');
const router=express.Router();
const path=require('path');

router.get('/add-product',(req,res,next)=>{
    console.log('this is the 1st middleware');
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    // next();
});
router.post('/add-product',(req,res,next)=>{
    console.log('posted data',req.body);
    res.redirect('/');
});
module.exports=router;