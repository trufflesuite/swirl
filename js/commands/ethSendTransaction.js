const { run } = require('neodoc');
const swirl = require("../core");
const command = "jswirl (ethSendTransaction | eth_sendTransaction)";
const { rich } = require("../utils/helper");

module.exports = async (argv) => {
  const args = run(`
  usage: 
    ${command} [-h | --help] [-v | --version]
    ${command} (TXOBJECT | (--to=TO --from=FROM --value=VALUE) [--gas=GAS --gasPrice=GASPRICE --data=DATA --nonce=NONCE])
  `, { argv: argv, smartOptions: true });
  console.log(args);
  let result = rich(args);
  console.log(await swirl("eth_sendTransaction", result));
};
