var PROTO_PATH = '../hello.proto';
var parseArgs = require('minimist');
var grpc = require('@grpc/grpc-js');
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
var todo_proto = grpc.loadPackageDefinition(packageDefinition).todo;
let newTodo = {
    title: 'To complete all protocols code',
    description: "To push the code of protocols demystification"
}
function main() {
    var argv = parseArgs(process.argv.slice(2), {
        string: 'target'
    });
    var target;
    if (argv.target) {
        target = argv.target;
    } else {
        target = 'localhost:50051';
    }
    var client = new todo_proto.Greeter(target,
        grpc.credentials.createInsecure());
    var user;
    if (argv._.length > 0) {
        user = argv._[0];
    } else {
        user = 'world';
    }
    client.sayHello({ name: user }, function (err, response) {
        console.log('Greeting:', response.message);
    });
    client.gettodos({}, (error, todos) => {
        if (!error) {
            console.log('successfullt fetched todo lists');
            console.log(todos);
        }
        else {
            console.error(error);
        }
    })
    client.AddTodo(newTodo, (error, todo) => {
        if (!error) {
            console.log('New Todo inserted successfully', todo);
        }
        else {
            console.error(error);
        }
    })
    client.deleteTodo(1, (error, _) => {
        if (!error) {
            console.log('Todo is deleted Successfully')
        }
        else {
            console.error(error)
        }
    })
}

main();