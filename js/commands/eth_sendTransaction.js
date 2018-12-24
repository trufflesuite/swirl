const command = "jswirl (ethSendTransaction | eth_sendTransaction)";
const { rich, run, missing, retrieve } = require("../utils/helper");
const { OPTIONS } = require("../utils/common");
const swirl = require("../core");
const docString = `
usage: 
  ${command} [-h | --help] [--version]
  ${command} TXOBJECT [options]
  ${command} (--to=TO --from=FROM --value=VALUE) [--gas=GAS --gasPrice=GASPRICE --data=DATA --nonce=NONCE] [options]

${OPTIONS}
`;

module.exports = (argv) => async () => {
  // const dryRun = retrieve("--dry-run", argv);
  const options = run(docString, argv, rich);
  const params = options.params[0];
  if(missing(params, "to", "from", "value")){
    console.log(docString)
    return;
  }
  if (options.dryRun) {
    console.log(options)
    return
  }
  console.log(await swirl(options));
};
