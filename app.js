const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:false})); // this will parse the form inputs to the object

app.use('/add-product',(req,res,next)=>{
    console.log('this is the 1st middleware');
    res.send(`<form action="/product" method="POST">
        <input type='text' name='title'>
        <button>Submit</button>
    </form>`);
    // next();
});
app.get('/product',(req,res,next)=>{
    console.log('posted data',req.body);
    res.redirect('/');
});
app.use('/',(req,res,next)=>{
    console.log('this is the 2nd middleware');
    res.send('<h1>This is the main page!</h1>')
});
app.listen(3000);