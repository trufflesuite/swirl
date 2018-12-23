const { run } = require('neodoc');
const command = "jswirl (ethAccounts | eth_accounts)";
module.exports = (argv) => {
  const args = run(`
  usage: 
    ${command} [-h | --help] [-v | --version]
    ${command}
  `, { argv: argv, smartOptions: true });
  console.log(args);
}
