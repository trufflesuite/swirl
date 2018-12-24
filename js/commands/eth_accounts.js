const command = "jswirl (ethAccounts | eth_accounts)";
const { OPTIONS } = require("../utils/common");
const { run } = require("../utils/helper");
const swirl = require("../core");
const docString = `
usage: 
  ${command} [-h | --help] [--version]
  ${command} [options]

${OPTIONS}
`;
module.exports = (argv) => async () => {
  const options = run(docString, argv);
  if (options.dryRun) {
    console.log('dry run...')
    console.log(options)
    return
  }
  console.log(await swirl(options));
}
