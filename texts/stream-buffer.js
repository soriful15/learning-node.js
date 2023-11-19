const http = require('http')
const fs = require('fs')
const server = http.createServer();


// listener
/* server.on('request',(req,res)=>{
    // console.log(req)
    console.log(req.url, req.method)
    res.end("Hello from world")
})
server.listen(5000,()=>{
    console.log(`Server is listening on port 5000`)
}) */

server.on('request', (req, res) => {
    if (req.url === '/read-file' && req.method === 'GET');
    // streaming file reading
    // const readableStream = fs.createReadStream('./texts/read.text')
    // const readableStream = fs.createReadStream(__dirname +'/texts/read.text') // ai vabe likhte pari
    const readableStream = fs.createReadStream(process.cwd() + '/texts/read.txt') // ai vabe o likhte pari

    readableStream.on('data', (buffer) => {
        res.statusCode = 200;
        res.write(buffer)
    })
    readableStream.on('end', () => {
        res.statusCode = 200;
        res.end("The Streaming is over")
    })

    readableStream.on('error', (error) => {
        console.log(error)
        res.statusCode = 500;
        res.end("something went wrong")
    })
})
server.listen(5000, () => {
    console.log(`Server is listening on port 5000`)
})


