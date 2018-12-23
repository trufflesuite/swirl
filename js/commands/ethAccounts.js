const { run } = require('neodoc');
const command = "jswirl (ethAccounts | eth_accounts)";
const DEFAULT = `[-p --ssl --host=HOST]`;
const HELPTEXT = `
usage: 
  ${command} [-h | --help] [-v | --version]
  ${command} [options]

Options:
  -p PORT Change port [default: 8545]
`;
module.exports = (argv) => {
  const args = run(HELPTEXT, { argv: argv, smartOptions: true });
  console.log(args);
}
