const express=require('express');
const router=express.Router();
const path=require('path');

const products=[];
router.get('/add-product',(req,res,next)=>{
    console.log('this is the 1st middleware');
    res.render('add-product',{pageTitle:'Add Product'});
    // next();
});
router.post('/add-product',(req,res,next)=>{
    products.push({title:req.body.title});
    console.log('posted data',products,req.body.title);
    res.redirect('/');
});

module.exports={router,products};