const { ClientRequest} = require('http');

module.exports = {
  call(method = "eth_accounts", ...params){
    return new Promise((resolve, reject) => {
      const jsonrpc = rpc(method, params);
      const rpccall = request(jsonrpc);
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
}

const request = (rpc = {}, host = "localhost", port = 8545) => {
  const req = new ClientRequest({
    hostname: "localhost",
    port: 8545,
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
