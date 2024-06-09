const dgram=require("dgram");
const client=dgram.createSocket("udp4");

client.on("message",(msg,remoteInfo)=>{
    console.log(`Received ${msg.toString()} from ${remoteInfo.address}:${remoteInfo.port}`)
})

client.on("error",(err)=>{
    console.log(`Some error occurred ${err.message}`)
})

client.send("Hello UDP server",41234,"127.0.0.1")