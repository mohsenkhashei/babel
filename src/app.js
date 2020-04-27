// const http = require('http');
import http from 'http';

http.createServer( (req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('hello world')
}).listen(8080, () => { console.log('listening on 8080')})