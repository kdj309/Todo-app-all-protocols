const http = require("http")
const todos = []
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let body
    let chunks = []
    req.on("data", (chunk) => {
        chunks.push(chunk)
    })
    req.on("end", () => {
        body = Buffer.concat(chunks).toString();
        if (body.includes("title")) {
            todos.push(JSON.parse(body))
        } else if (body.includes("todoid")) {
            const todoIndex = todos.findIndex((i) => i.id === JSON.parse(body).todoid)
            if (todoIndex != -1) {
                todos[todoIndex].isCompleted = !todos[todoIndex].isCompleted;
                console.log({ updatedtodos: todos })
            }
        } else if (body.includes("deletetodo")) {
            const todoIndex = todos.findIndex((i) => i.id === JSON.parse(body).deletetodo)
            if (todoIndex != -1) {
                const deletedTodos = todos.splice(todoIndex, 1);
                console.log({ deletedTodos })
            }
        }
        chunks = []
    })
    if (req.method === "GET" && req.url === '/todos') {
        res.end(JSON.stringify({ todos }))
    } else if (req.method === "POST" && req.url === "/addtodo") {
        res.end(JSON.stringify({
            status: "ok"
        }))
    } else if (req.method === "PUT" && req.url === "/updateTodo") {
        res.end(JSON.stringify({
            status: "ok"
        }))
    } else if (req.method === "DELETE" && req.url === "/deleteTodo") {
        res.end(JSON.stringify({
            status: "ok"
        }))
    } else {
        res.end(JSON.stringify({
            status: "Not found"
        }))
    }
})
server.listen(8000)