const http = require('http');

const server = http.createServer((req, res) =>{
    if (req.url=='/'){
        res.end('this is a home page');
    }
    else if (req.url=='/about'){
        res.end('this is the about page');
    }
    else {
        res.writeHead(404);
        res.end('Page not found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});