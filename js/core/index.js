const { call } = require("./request");

(async () => {
  const [ method, ...params ] = process.argv.slice(2);
  console.log(await call(method, ...params));
})();
