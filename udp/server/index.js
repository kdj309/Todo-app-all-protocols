const dgram=require("node:dgram")
const server=dgram.createSocket("udp4");

server.on("connect",()=>{
    console.log("someone got connected")
})

server.on("message",(msg,remoteInfo)=>{
    console.log(`Received ${msg.toString()} from ${remoteInfo.address}:${remoteInfo.port}`)
    server.send("Hi UDP Client",remoteInfo.port,remoteInfo.address)
})

server.on("error",(err)=>{
    console.log(`Some error occurred ${err.message}`)
})

server.on("close",()=>{
    console.log(`Disconnected`)
})
server.on('listening', () => {
    const address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
  });

server.bind(41234,"127.0.0.1")