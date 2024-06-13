const http2 = require('node:http2');
const fs = require('node:fs');

const server = http2.createSecureServer({
  key: fs.readFileSync('localhost.key'),
  cert: fs.readFileSync('localhost.crt'),
});
const todos = [{ title: "To completed HTTP2 Todo application", isCompleted: false, id: 1 }]
server.on('error', (err) => console.error(err));
server.on('stream', (stream, headers) => {
  stream.respond({
    'content-type': 'application/json',
    ':status': 200,
  });
  let chunks = []
  if (headers[":method"] === "GET" && headers[":path"] === "/todos") {
    stream.end(JSON.stringify(todos));
  } else if (headers[":method"] === "POST" && headers[":path"] === "/addtodo") {
    stream.end(JSON.stringify({ response: "Helo World From POST method" }));
  } else if (headers[":method"] === "PUT" && headers[":path"] === "/updateTodo") {
    stream.end(JSON.stringify({ response: "Helo World From PUT method" }));
  } else if (headers[":method"] === "DELETE" && headers[":path"] === "/deleteTodo") {
    stream.end(JSON.stringify({ response: "Helo World From DELETE method" }));
  }
  else {
    stream.end(JSON.stringify({ response: "Helo World" }));
  }
  stream.on("data", (chunk) => {
    chunks.push(chunk)
  })
  stream.on("end", () => {
    const body = Buffer.concat(chunks)
    if (body.toString().includes("title")) {
      todos.push(JSON.parse(body.toString()))
    } else if (body.toString().includes("todoid")) {
      const todoIndex = todos.findIndex((i) => i.id === JSON.parse(body).todoid)
      if (todoIndex != -1) {
        todos[todoIndex].isCompleted = !todos[todoIndex].isCompleted;
        console.log({updatedtodos:todos})
      }
    } else if (body.toString().includes("deletetodo")) {
      const todoIndex = todos.findIndex((i) => i.id === JSON.parse(body).deletetodo)
      if (todoIndex != -1) {
        const deletedTodos = todos.splice(todoIndex, 1);
        console.log({ deletedTodos })
      }
    }
    chunks = []
  })
});
server.listen(8443);