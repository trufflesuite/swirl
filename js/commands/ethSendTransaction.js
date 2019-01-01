const { run } = require('neodoc')
const swirl = require('../core')
const command = 'jswirl (ethSendTransaction | eth_sendTransaction)'
const { rich } = require('../utils/helper')

const docString = `
usage:
  ${command} [-h | --help]
  ${command} TXOBJECT  [--dry-run]
  ${command} --to=TO --from=FROM --value=VALUE [--gas=GAS --gasPrice=GASPRICE --data=DATA --nonce=NONCE] [--dry-run]
`
module.exports = async argv => {
  const args = run(docString, { argv: argv, smartOptions: true })

  const dryRun = '--dry-run' in args
  delete args['--dry-run']

  let result

  // match TXOBJECT production
  if ('TXOBJECT' in args) {
    result = rich(args)
    if (dryRun) {
      console.log('dry-run')
      console.log('eth_sendTransaction: ', JSON.stringify(result))
      return
    } else {
      console.log('invoke rpc call...with')
      console.log('eth_sendTransaction: ', JSON.stringify(result))
    }
  } else {
    // match alternate production
    delete args['ethSendTransaction']
    const params = Object.entries(args)
                      .reduce((acc, [key, value]) => {
                         acc[`${key.replace(/--?/, '')}`] = value
                         return acc
                         }, {})

    const rpcArgs = { command: 'ethSendTransaction', params }
    console.log('rpcCall: ', JSON.stringify(rpcArgs))
    return
  }
}
