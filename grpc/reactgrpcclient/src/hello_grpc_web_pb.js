/**
 * @fileoverview gRPC-Web generated client stub for todo
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.27.1
// source: src/hello.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.todo = require('./hello_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.todo.GreeterClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.todo.GreeterPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.HelloRequest,
 *   !proto.todo.HelloReply>}
 */
const methodDescriptor_Greeter_SayHello = new grpc.web.MethodDescriptor(
  '/todo.Greeter/SayHello',
  grpc.web.MethodType.UNARY,
  proto.todo.HelloRequest,
  proto.todo.HelloReply,
  /**
   * @param {!proto.todo.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.HelloReply.deserializeBinary
);


/**
 * @param {!proto.todo.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.todo.HelloReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.HelloReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.GreeterClient.prototype.sayHello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.Greeter/SayHello',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHello,
      callback);
};


/**
 * @param {!proto.todo.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.HelloReply>}
 *     Promise that resolves to the response
 */
proto.todo.GreeterPromiseClient.prototype.sayHello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.Greeter/SayHello',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHello);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.addTodoParams,
 *   !proto.todo.Todo>}
 */
const methodDescriptor_Greeter_AddTodo = new grpc.web.MethodDescriptor(
  '/todo.Greeter/AddTodo',
  grpc.web.MethodType.UNARY,
  proto.todo.addTodoParams,
  proto.todo.Todo,
  /**
   * @param {!proto.todo.addTodoParams} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.Todo.deserializeBinary
);


/**
 * @param {!proto.todo.addTodoParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.todo.Todo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.Todo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.GreeterClient.prototype.addTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.Greeter/AddTodo',
      request,
      metadata || {},
      methodDescriptor_Greeter_AddTodo,
      callback);
};


/**
 * @param {!proto.todo.addTodoParams} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.Todo>}
 *     Promise that resolves to the response
 */
proto.todo.GreeterPromiseClient.prototype.addTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.Greeter/AddTodo',
      request,
      metadata || {},
      methodDescriptor_Greeter_AddTodo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.empty,
 *   !proto.todo.TodoList>}
 */
const methodDescriptor_Greeter_gettodos = new grpc.web.MethodDescriptor(
  '/todo.Greeter/gettodos',
  grpc.web.MethodType.UNARY,
  proto.todo.empty,
  proto.todo.TodoList,
  /**
   * @param {!proto.todo.empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.TodoList.deserializeBinary
);


/**
 * @param {!proto.todo.empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.todo.TodoList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.TodoList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.GreeterClient.prototype.gettodos =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.Greeter/gettodos',
      request,
      metadata || {},
      methodDescriptor_Greeter_gettodos,
      callback);
};


/**
 * @param {!proto.todo.empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.TodoList>}
 *     Promise that resolves to the response
 */
proto.todo.GreeterPromiseClient.prototype.gettodos =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.Greeter/gettodos',
      request,
      metadata || {},
      methodDescriptor_Greeter_gettodos);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.deleteTodoParams,
 *   !proto.todo.empty>}
 */
const methodDescriptor_Greeter_deleteTodo = new grpc.web.MethodDescriptor(
  '/todo.Greeter/deleteTodo',
  grpc.web.MethodType.UNARY,
  proto.todo.deleteTodoParams,
  proto.todo.empty,
  /**
   * @param {!proto.todo.deleteTodoParams} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.empty.deserializeBinary
);


/**
 * @param {!proto.todo.deleteTodoParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.todo.empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.GreeterClient.prototype.deleteTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.Greeter/deleteTodo',
      request,
      metadata || {},
      methodDescriptor_Greeter_deleteTodo,
      callback);
};


/**
 * @param {!proto.todo.deleteTodoParams} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.empty>}
 *     Promise that resolves to the response
 */
proto.todo.GreeterPromiseClient.prototype.deleteTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.Greeter/deleteTodo',
      request,
      metadata || {},
      methodDescriptor_Greeter_deleteTodo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.updateTodoParams,
 *   !proto.todo.Todo>}
 */
const methodDescriptor_Greeter_updateTodo = new grpc.web.MethodDescriptor(
  '/todo.Greeter/updateTodo',
  grpc.web.MethodType.UNARY,
  proto.todo.updateTodoParams,
  proto.todo.Todo,
  /**
   * @param {!proto.todo.updateTodoParams} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.Todo.deserializeBinary
);


/**
 * @param {!proto.todo.updateTodoParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.todo.Todo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.Todo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.GreeterClient.prototype.updateTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.Greeter/updateTodo',
      request,
      metadata || {},
      methodDescriptor_Greeter_updateTodo,
      callback);
};


/**
 * @param {!proto.todo.updateTodoParams} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.Todo>}
 *     Promise that resolves to the response
 */
proto.todo.GreeterPromiseClient.prototype.updateTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.Greeter/updateTodo',
      request,
      metadata || {},
      methodDescriptor_Greeter_updateTodo);
};


module.exports = proto.todo;

