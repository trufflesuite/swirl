const { run } = require('neodoc');
const command = "jswirl ethSendTransaction";
const swirl = require("../core");
// const command = "jswirl (ethSendTransaction | eth_sendTransaction)";
module.exports = async (argv) => {
  const args = run(`
  usage: 
    ${command} [-h | --help] [-v | --version]
    ${command} (TXOBJECT | (--to=TO --from=FROM --value=VALUE) [--gas=GAS --gasPrice=GASPRICE --data=DATA --nonce=NONCE])
  `, { argv: argv, smartOptions: true });
  console.log(args);
  let result;
  if( args.TXOBJECT ){
    result = JSON.parse(args.TXOBJECT);
  } else {
    result = Object.keys(args).reduce((acc, curr) => {
      if (curr.includes("--")){
        const newKey = curr.substring(2);
        acc[newKey] = args[curr];
      }
      return acc;
    }, {});
  }
  console.log(await swirl("eth_sendTransaction", result), null, 2);
};
