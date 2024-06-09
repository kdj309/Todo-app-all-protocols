const http = require("http")
const todos = []
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let body
    let chunks = []
    req.on("data", (chunk) => {
        if (req.url === "/addtodo") {
            chunks.push(chunk)
        }

    })
    req.on("end", () => {
        if (req.url === "/addtodo") {
            body = Buffer.concat(chunks).toString();
            todos.push(JSON.parse(body))
            console.log({ todos, type: typeof todos })
        }
    })
    if (req.method === "GET" && req.url === '/todos') {
        res.end(JSON.stringify({ todos }))
    } else if (req.method === "POST" && req.url === "/addtodo") {
        res.end(JSON.stringify({
            status: "ok"
        }))
    } 
})
server.listen(8000)