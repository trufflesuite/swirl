const { run } = require('neodoc')
const command = 'jswirl (ethGetBlockBy | eth_getBlockBy)'

const docString = `
Usage:
  ${command} [-h | --help] [-v | --version]
  ${command} (TXOBJECT | (--to=TO --from=FROM --value=VALUE) [--gas=GAS --gasPrice=GASPRICE --data=DATA --nonce=NONCE])
`

module.exports = argv => {
  const args = run(docString, { argv: argv, smartOptions: true })
  console.log(args)
}
