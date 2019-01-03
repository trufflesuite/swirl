const { run } = require('neodoc')
const swirl = require('../core')
const command = 'jswirl (ethSendTransaction | eth_sendTransaction)'
const { rich } = require('../utils/helper')

const docString = `
Creates new message call transaction or a contract creation, if the data field contains code.

Usage:
  ${command} [-h | --help]
  ${command} TXOBJECT  [--dry-run]
  ${command} --to=TO --from=FROM --value=VALUE [--gas=GAS --gasPrice=GASPRICE --data=DATA --nonce=NONCE] [--dry-run]

Options:
  --dry-run               Show what the command does
  --to=TO                 The address the transaction is directed to.
  --from=FROM             The address the transaction is send from.
  --value=VALUE           Integer of the value sent with this transaction
  --gas=GAS               The gas provided for the transaction execution.
  --gasPrice=GASPRICE:    The gasPrice used for each paid gas
  --data=DATA             The compiled code of a contract OR the hash of the
                          invoked method signature and encoded parameters. For
                          details see Ethereum
                          Contract ABI
  --nonce=NONCE           Integer of a nonce. This allows to overwrite your own
                          pending transactions that use the same nonce.

Examples:
  jswirl ethSendTransaction --to 0xd46e8dd67c5d32be8058bb8eb970870f07244567   \\
                            --from 0xb60e8dd61c5d32be8058bb8eb970870f07233155 \\
                            --value 0x9184e72a

Reference: https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_sendtransaction

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
