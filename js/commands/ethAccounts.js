const { run } = require('neodoc')
const command = 'jswirl (ethAccounts | eth_accounts)'
const docString = `
Get a list of addresses owned by client.

usage:
  ${command} [-h | --help]
  ${command} [options]

Options:
  --port PORT       Change port [default: 8545]
  --dry-run         Perform dry run

Examples:
  $ jswirl ethAccounts

Reference: https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_accounts
`
module.exports = argv => {
  const args = run(docString, { argv: argv, smartOptions: true })
  if ('--dry-run' in args) {
    console.log('dry run...')
    console.log(args)
    return
  }

  console.log(JSON.stringify(args))
}
