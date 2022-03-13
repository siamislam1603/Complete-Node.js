const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const adminRouter=require('./routes/admin');
const shopRouter=require('./routes/shop');
const path=require('path');
const errorController=require('./controllers/error');

app.use(bodyParser.urlencoded({extended:false})); // this will parse the form inputs to the object
app.use(express.static(path.join(__dirname,'public')));
app.use(shopRouter);
app.use(adminRouter);
app.set('view engine','ejs');
app.set('views','views'); // by default views means process.cwd() + '/views'

app.use(errorController.errorRes);

app.listen(3000);