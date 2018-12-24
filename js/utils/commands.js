// Mapping input to modules
// TODO: examples for how to use this - documentation
const commands = [
  [/^eth(_s|S)endTransaction/, require('../commands/ethSendTransaction')],
  [/^eth(_a|A)ccounts/, require('../commands/ethAccounts')],
  [/^eth(_g|G)etBlockBy/, require('../commands/ethGetBlockBy')]
]

/**
 * Determines if an argument matches a known command
 *
 * @param {Object} dic
 * @param {string} args.command The command
 * @param {string[]} args.args The <command> arguments
 * @returns {function | undefined} A curried function, or undefined if not matched.
 */
const matchSubCommand = dic => {
  const cmd = dic['<command>']
  const entryFound = commands.find(([rex]) => rex.test(cmd))
  if (entryFound) {
    subcommand = entryFound[1]
    const params = [cmd].concat(dic['<args>'])
    return () => subcommand(params)
  }
  return undefined
}

module.exports = matchSubCommand
