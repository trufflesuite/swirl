// Mapping input to modules
// TODO: examples for how to use this - documentation
const commands = [
  [/^eth(_s|S)endTransaction/, require("../commands/ethSendTransaction")],
  [/^eth(_a|A)ccounts/, require("../commands/ethAccounts")]
];

module.exports = function(args) {
  let found = commands.find(function(item){
    return (new RegExp(item[0])).test(args["<command>"]);
  });
  let key, subcommand;
  if(found) {
    [key, subcommand] = found;
  }
  if(subcommand) {
    return function() {
      const params = [args['<command>']].concat(args['<args>']);
      return subcommand(params);
    }
  }
}
