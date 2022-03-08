const fs=require('fs');
const http=require('http');

const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        res.write(`
            <html>
                <head><title>This is the homepage</title></head>
                <body>
                    <form action='/message' method='POST'>
                        <input type='text' name='messge'>
                        <input type='submit'>
                    </form>
                </body>
            </html>
        `);
        return res.end();
    }
    // Redirects to the url using res.setHeader
    else if(url==='/message' && method==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split('=')[1];
            console.log(message,parsedBody);
            fs.writeFileSync('message.txt',message);
        });
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write(`
        <html>
            <head><title>This is the no matched url page</title></head>
            <body>Nothing so fency!!!!!</body>
        </html>
    `);
    res.end();
});
server.listen(3000);