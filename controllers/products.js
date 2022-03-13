const products=[];

exports.getAddProduct=(req,res,next)=>{
    console.log('this is the 1st middleware');
    res.render('add-product',{pageTitle:'Add Product'});
}

exports.postAddProduct=(req,res,next)=>{
    products.push({title:req.body.title});
    console.log('posted data',products,req.body.title);
    res.redirect('/');
}

exports.getAllProducts=(req,res,next)=>{
    res.render('shop',{products:products,pageTitle:'Shop'});
}