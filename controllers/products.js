const Product=require('../models/product');

exports.getAddProduct=(req,res,next)=>{
    console.log('this is the 1st middleware');
    res.render('add-product',{pageTitle:'Add Product'});
}

exports.postAddProduct=(req,res,next)=>{
    const product=new Product(req.body.title);
    product.save();
    console.log('posted data',Product.fetchAll(),req.body.title);
    res.redirect('/');
}

exports.getAllProducts=(req,res,next)=>{
    const products=Product.fetchAll();
    res.render('shop',{products:products,pageTitle:'Shop'});
}