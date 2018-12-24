const { run } = require('neodoc')
const swirl = require('../core')
const command = 'jswirl (ethSendTransaction | eth_sendTransaction)'
const { rich } = require('../utils/helper')

const docString = `
usage:
  ${command} [-h | --help] [--version]
  ${command} TXOBJECT  [--dry-run]
  ${command} --to=TO --from=FROM --value=VALUE [--gas=GAS --gasPrice=GASPRICE --data=DATA --nonce=NONCE] [--dry-run]
`
module.exports = async argv => {
  const args = run(docString, { argv: argv, smartOptions: true })

  if (Object.keys(args).length < 2) {
    console.log(docString)
    return
  }
  let result = rich(args)
  if ('--dry-run' in args) {
    console.log(args)
    return
  }
  console.log(await swirl('eth_sendTransaction', result))
}
