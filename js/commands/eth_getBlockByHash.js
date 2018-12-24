const command = "jswirl (eth_getBlockByHash | ethGetBlockByHash)";
const { OPTIONS } = require("../utils/common");
const { run, positional } = require("../utils/helper");
const swirl = require("../core");
const docString = `
usage: 
  ${command} [-h | --help] [--version]
  ${command} --hash HASH --include INCLUDETX [options]

${OPTIONS}
`;

module.exports = (argv) => async () => {
  const options = run(docString, argv, positional);
  if (options.dryRun) {
    console.log('dry run...');
    console.log(options);
    return
  }
  console.log(await swirl(options));
}
