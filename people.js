const socialGroups = ['airbnb', 'facebook', 'messenger', 'whatsapp'];
const a=6;
const test=()=>{
    console.log('test function in people module');
}
//module.exports={groups:socialGroups,varA:a,testFunc:test}; 
module.exports = {socialGroups,a,test}; // if we don't want to send as the same variable name as key,value pair of module, then we don't require to address the keys
console.log(module);