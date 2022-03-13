const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const adminRouter=require('./routes/admin');
const shopModule=require('./routes/shop');
const path=require('path');

app.use(bodyParser.urlencoded({extended:false})); // this will parse the form inputs to the object
app.use(express.static(path.join(__dirname,'public')));
app.use(shopModule.router);
app.use(adminRouter);
app.set('view engine','ejs');
app.set('views','views'); // by default views means process.cwd() + '/views'

app.use((req,res,next)=>{
    res.status(404).render('404err',{pageTitle:'Not Found'});
});

app.listen(3000);