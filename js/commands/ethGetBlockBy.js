const { run } = require('neodoc');
const command = "jswirl ethSendTransaction";
// const command = "jswirl (ethSendTransaction | eth_sendTransaction)";
module.exports = (argv) => {
  const args = run(`
  usage: 
    ${command} [-h | --help] [-v | --version]
    ${command} (TXOBJECT | (--to=TO --from=FROM --value=VALUE) [--gas=GAS --gasPrice=GASPRICE --data=DATA --nonce=NONCE])
  `, { argv: argv, smartOptions: true });
  console.log(args);
}
