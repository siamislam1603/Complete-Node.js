const express=require('express');
const router=express.Router();

router.get('/add-product',(req,res,next)=>{
    console.log('this is the 1st middleware');
    res.send(`<form action="/product" method="POST">
        <input type='text' name='title'>
        <button>Submit</button>
    </form>`);
    // next();
});
router.post('/product',(req,res,next)=>{
    console.log('posted data',req.body);
    res.redirect('/');
});
module.exports=router;