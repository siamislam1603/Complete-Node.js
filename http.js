const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Hi, This is a home page.');
        res.write('We can call write method of the response object as many as we want.');
        res.end();
    }
    else if(req.url==='/about'){
        res.write('This is about us page');
        res.end();
    }
    else{
        res.write('Not Found');
        res.end();
    }
});

server.listen(3000); //event-loop keep this server running.
console.log('Listening on port 3000');