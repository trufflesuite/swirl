const command = "jswirl (eth_getBlockByHash | ethGetBlockByHash)";
const { OPTIONS } = require("../utils/common");
const { run, rich } = require("../utils/helper");
const swirl = require("../core");
const HELPTEXT = `
usage: 
  ${command} [-h | --help] [--version]
  ${command} --hash HASH --include INCLUDETX [options]

${OPTIONS}
`;
module.exports = (method, argv) => async () => {
  const options = run(method, HELPTEXT, argv, rich);
  console.log(options);
  // console.log(await swirl(options, method));
}

// function positional(args){
//   const positions = ["HASH", "INCLUDE"]
//   const keys = Object.keys(positions);
//   return keys.map((val, i, arr) => {
//     return args[val] = positions[val];
//   })
//   const temp = Object.values(args)
//   return temp.slice(1);
// }
