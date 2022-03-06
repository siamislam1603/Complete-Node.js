// File related information using path module
const path=require('path');
console.log(path.dirname('C:/LazyChat/Node.js Practice/Complete-Node.js/people.js'));  //directoryname
console.log(path.basename('C:/LazyChat/Node.js Practice/Complete-Node.js/people.js'));  //people.js
console.log(path.extname('C:/LazyChat/Node.js Practice/Complete-Node.js/people.js'));  //js
console.log(path.parse('C:/LazyChat/Node.js Practice/Complete-Node.js/people.js'));  //returns all information, i.e. root, dir, base,ext,name

// OS related info using os module
const os=require('os');
console.log(os.cpus()); // all cpu info
console.log(os.freemem()); //free memory in os in bytes

// File read,write using Files System module
const fs=require('fs');
// File read-write (synchronous) - which blocks the eventloop for I/O operation 
fs.writeFileSync('fileSystem.txt','Hi there!');
const fileRead=fs.readFileSync('fileSystem.txt');
console.log(fileRead.toString());
// File read-write (asynchronous) - doesn't block the event loop, as It forwards the request to I/O
fs.appendFile('fileSystem.txt', ' Whats up?', (err) => {
    if (err) throw err;
    console.log('The " Whats up" was appended to file!');
});
fs.readFile('fileSystem.txt',(err,data)=>{
    console.log(data.toString());
});
console.log('Hello'); // This will execute simultaneously as the main thread isn't blocked for the I/O operation

// Event Emitter - The blueprint of the EventEmitter must be same for the event raiser and event register
const School=require('./school');
school=new School();
//register event listener for the event raiser
school.on('bellRang',({period,text})=>{
    console.log(`Bell rang after the ${period} ${text}`);
});
school.startPeriod();