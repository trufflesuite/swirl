const { run } = require('neodoc')
const command = 'jswirl (ethAccounts | eth_accounts)'
const docString = `
usage:
  ${command} [-h | --help] [-v | --version]
  ${command} [options]

Options:
  -p, --port PORT Change port [default: 8545]
  --dry-run Perform dry run
`
module.exports = argv => {
  const args = run(docString, { argv: argv, smartOptions: true })
  if ('--dry-run' in args) {
    console.log('dry run...')
    console.log(args)
    return
  }
}
