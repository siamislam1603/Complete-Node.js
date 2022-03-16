const fs=require('fs');
const {dirname,join}=require('path');
const rootDir=dirname(require.main.filename);
const productsJson=join(rootDir,'data','products.json');

module.exports= class Product{
    constructor(title){
        this.title=title;
    }
    save(){
        fs.readFile(productsJson,(err,fileContent)=>{
            console.log('adfkjdakL:',fileContent.toString(),this);
            let data=[];
            if(!err && fileContent.toString().length>0) 
                data=JSON.parse(fileContent);
            data.push({title:this.title});
            fs.writeFile(productsJson,JSON.stringify(data),err=>{
                console.log('fdjakfj',err);
            });
        });
    }
    static fetchAll(cb){
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
}