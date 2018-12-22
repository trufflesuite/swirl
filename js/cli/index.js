const swirl = require("swirl-core");
const neodoc = require('neodoc');


const args = neodoc.run(`
Usage: index.js [-h | --help] [--version]
Try: index.js --help
`, { optionsFirst: true, smartOptions: true });

// (async () => {
//   const [ method, ...params ] = process.argv.slice(2);
//   console.log(await swirl(method, ...params));
// })();

console.log(args);
