const http2 = require('node:http2');
const fs = require('node:fs');

const server = http2.createSecureServer({
  key: fs.readFileSync('localhost.key'),
  cert: fs.readFileSync('localhost.crt'),
});
server.on('error', (err) => console.error(err));

server.on('stream', (stream, headers) => {
  console.log({ headers })
  stream.respond({
    'content-type': 'application/json',
    ':status': 200,
  });
  stream.end(JSON.stringify({ response: "Helo World From HTTP2" }));
});

server.listen(8443);