const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>This is Code With Hazard </h1> <p> Hey is the way to rock world</p>');

})

server.listen(port, () => {
    console.log('Server is listening on port ${port}');

});






// const http=require('http');
// const server=http.createServer((req,res) => {
//     const url=req.url;
//     if(url == '/'){ 
//         res.setHeader('Content-Type','text/html');
//         res.write('<html>');
//         res.write('<body>Hello</body>');
//         res.write('</html>');
//         res.end();
    

//     }
   
// });

// server.listen(3000);