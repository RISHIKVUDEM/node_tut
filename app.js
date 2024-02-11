const http = require('http')

const server = http.createServer((req, res) => 
{
    if(req.url === '/')
    {
        res.end('Welcome to home page')
    }
    else if(req.url === '/about')
    {
        res.end('This is some info about us')
    }
    else
    {
        res.end('unable to find the page u r looking for')
    }
})

server.listen(4000)