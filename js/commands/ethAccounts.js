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
module.exports = (method, argv) => async () => {
  const options = run(method, docString, argv);
  console.log(options);
  if (argv.includes("--dry-run")) {
    console.log('dry run...')
    console.log(argv)
    return
  }
  console.log(await swirl(options, method));
}
