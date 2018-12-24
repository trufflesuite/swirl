const command = "jswirl (ethSendTransaction | eth_sendTransaction)";
const { rich, run, missing } = require("../utils/helper");
const { OPTIONS } = require("../utils/common");
const swirl = require("../core");
const docString = `
usage: 
  ${command} [-h | --help] [--version]
  ${command} (TXOBJECT | (--to=TO --from=FROM --value=VALUE) [--gas=GAS --gasPrice=GASPRICE --data=DATA --nonce=NONCE]) [options]

${OPTIONS}
`;

module.exports = (method, argv) => async () => {
  const options = run(method, docString, argv, rich);
  const params = options.params[0];
  if(missing(params, "to", "from", "value")){
    console.log(docString)
    return;
  }
  if (argv.includes('--dry-run')) {
    console.log(argv)
    return
  }
  console.log(await swirl(options, method));
};
