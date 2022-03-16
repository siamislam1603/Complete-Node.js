const Product=require('../models/product');

exports.getAddProduct=(req,res,next)=>{
    console.log('this is the 1st middleware');
    res.render('add-product',{pageTitle:'Add Product'});
}

exports.postAddProduct=(req,res,next)=>{
    const product=new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getAllProducts=(req,res,next)=>{
    Product.fetchAll((products)=>{ 
        res.render('shop',{products:products,pageTitle:'Shop'});
    });
}