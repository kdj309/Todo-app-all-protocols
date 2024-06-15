var PROTO_PATH = '../hello.proto';
var grpc = require('@grpc/grpc-js');
let todos = [
    { id: "1", title: 'Todo 1',isCompleted:true }
]
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
var todo = grpc.loadPackageDefinition(packageDefinition).todo;


function sayHello(call, callback) {
    callback(null, { message: 'Hello ' + call.request.name });
}

function addTodo(call, callback) {
    const todo = call.request;
    todos.push({...todo,isCompleted:false})
    console.log(todos)
    callback(null, todo)
}

function deleteTodo(call, callback) {
    const { id } = call.request;
    const todoDelete = todos.findIndex((t) => t.id == id);
    if (todoDelete != -1) {
        todos.splice(todoDelete, 1)
        callback(null,{})
    } else {
        callback({
            code: grpc.status.NOT_FOUND,
            details: "Not Found"
        })
    }
}
function updateTodo(call,callback) {
    const {id}=call.request;
    const todoUpdate = todos.findIndex((t) => t.id == id);
    if (todoUpdate != -1) {
        todos[todoUpdate].isCompleted=!todos[todoUpdate].isCompleted
        console.log(todos)
        callback(null,todos[todoUpdate])
    } else {
        callback({
            code: grpc.status.NOT_FOUND,
            details: "Not Found"
        })
    }
}
function gettodos(_, callback) {
    callback(null, { todo: todos })
}
function main() {
    var server = new grpc.Server();
    server.addService(todo.Greeter.service, { sayHello: sayHello, AddTodo: addTodo, deleteTodo: deleteTodo, gettodos,updateTodo });
    server.bindAsync('0.0.0.0:9090', grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err != null) {
            return console.error(err);
        }
        console.log(`gRPC listening on ${port}`)
    });
}

main();