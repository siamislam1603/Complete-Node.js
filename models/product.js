const fs=require('fs');
const {dirname,join}=require('path');
const rootDir=dirname(require.main.filename);
const productsJson=join(rootDir,'data','products.json');

const getProducts=(cb)=>{
    fs.readFile(productsJson,(err,fileContent)=>{
        if(err || fileContent.toString().length===0){
            cb([]);
        }
        else{
            const data=JSON.parse(fileContent);
            cb(data);
        }
    });
}
module.exports= class Product{
    constructor(title){
        this.title=title;
    }
    save(){
        getProducts(products=>{
            products.push(this);
            fs.writeFile(productsJson,JSON.stringify(products),err=>{
                console.log('fdjakfj',err);
            });
        });
    }
    static fetchAll(cb){
        getProducts(cb);
    }
}