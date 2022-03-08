const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const adminRouter=require('./routes/admin');
const shopRouter=require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false})); // this will parse the form inputs to the object
app.use(adminRouter);
app.use(shopRouter);

app.listen(3000);