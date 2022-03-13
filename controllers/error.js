exports.errorRes=(req,res,next)=>{
    res.status(404).render('404err',{pageTitle:'Not Found'});
}