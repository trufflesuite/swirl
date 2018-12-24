// Mapping input to modules
// TODO: examples for how to use this - documentation
const commands = [
  [/^eth(_s|S)endTransaction/, "eth_sendTransaction"],
  [/^eth(_a|A)ccounts/, "eth_accounts"],
  [/^eth(_g|G)etBlockByNumber/, "eth_getBlockByNumber"],
  [/^eth(_g|G)etBlockByHash/, "eth_getBlockByHash"],
];

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
    const [, subcommand] = entryFound;
    const params = [cmd].concat(dic['<args>']);
    params[0] = subcommand;
    return require(`../commands/${subcommand}.js`)(params);
  }
  return undefined
}

module.exports = matchSubCommand
