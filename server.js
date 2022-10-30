const fs = require('fs')
const http = require('http');

const server =http.createServer((req,res)=>{
    
    // fs.readFile('indexfive.html', ((err,data)=>{
        // if (err) {
            // throw err
        // }
        // res.writeHead(200, { 'Content-Type': 'text/html' });
        // res.write(data);
        // res.end()
    // }))
    // down here is another form of the code commented out above
        res.writeHead(200,{'Content-Type': 'text/html'});
        if (req.url == '/indexfive.html') {
            const indexReadstream = fs.createReadStream(`${__dirname}/indexfive.html`, 'utf8');
            indexReadstream.pipe(res)
        }

        if(req.url == '/abouts.html') {
            const aboutReadstream = fs.createReadStream(`${__dirname}/abouts.html`, 'utf8');
            aboutReadstream.pipe(res)
        }

        if(req.url == '/contacts.html') {
            const contactReadstream = fs.createReadStream(`${__dirname}/contacts.html`, 'utf8');
            contactReadstream.pipe(res)
        }


        
   
        console.log('file created')
    
})


server.listen(7000, '127.0.0.1');
