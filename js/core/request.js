const { ClientRequest} = require('http');

module.exports = function(options) {
  return new Promise((resolve, reject) => {
    const jsonrpc = rpc(options.method, options.params);
    const rpccall = request(jsonrpc, options.address);
    rpccall.on('response', (resp) => {
      let data = '';
      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => resolve(JSON.parse(data)));

    }).on("error", (err) => {
      reject(err);
    });
  });
}

const request = (rpc = {}, address) => {
  const req = new ClientRequest({
    hostname: address.host,
    port: address.port,
    path: "/",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(rpc)
    }
  });
  req.end(rpc);
  return req;
}

const rpc = (method, params) => JSON.stringify({
  id: 1337,
  jsonrpc: "2.0",
  method: method,
  params: [...params]
});
