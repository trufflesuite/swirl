const { run } = require('neodoc');
const swirl = require("../core");
const command = "jswirl (ethSendTransaction | eth_sendTransaction)";
const { rich } = require("../utils/helper");

const HELPTEXT = `
usage: 
  ${command} [-h | --help] [-v | --version]
  ${command} (TXOBJECT | (--to=TO --from=FROM --value=VALUE) [--gas=GAS --gasPrice=GASPRICE --data=DATA --nonce=NONCE])
`;
module.exports = async (argv) => {
  const args = run(HELPTEXT, { argv: argv, smartOptions: true });
  if(Object.keys(args).length < 2){
    console.log(HELPTEXT)
    return;
  }
  let result = rich(args);
  console.log(await swirl("eth_sendTransaction", result));
};
