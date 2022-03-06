const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write(`<html>
            <head><title>Form post</title></head>
            <body>
                <form method='POST' action='/process'>
                    <input type='text' name='message'/>
                </form>
            </body>
        </html>`)
        res.end();
    }
    else if(req.url==='/process' && req.method=='POST'){
        const body=[];
        // Here req itself is a stream which has chunks of buffer & each buffer is represented by some chunks of data
        req.on('data',(chunk)=>{
            body.push(chunk);
        });
        req.on('end',()=>{
            console.log('Stream is finished');
            const parsedBody=Buffer.concat(body).toString();
            console.log(parsedBody);
            res.write('Thanks for submitting.');
            res.end();
        })
    }
    else{
        res.write('Not Found');
        res.end();
    }
});

server.listen(3000); //event-loop keep this server running.
console.log('Listening on port 3000');