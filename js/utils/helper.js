const neodoc = require('neodoc');

const transformParamDictionary = args => 
  Object.keys(args).reduce((acc, curr) => {
    if (/^--/.test(curr)) {
      const newKey = curr.substring(2)
      acc[newKey] = args[curr]
    }
    return acc
  }, {})


module.exports = {
  run(docString, argv, formatter){
    const args = neodoc.run(docString, { argv: argv, smartOptions: true });
    const commands = argv.slice();
    const method = commands.shift();
    const retrieve = getRetriever(args, commands);
    const port = retrieve("-p", "--port");
    const host = retrieve("--host");
    const protocol = retrieve("--ssl");
    const address = {port, host, protocol};
    const dryRun = retrieve("--dry-run");
    return {
      argv,
      address,
      method,
      dryRun,
      params: formatter ? formatter(args, commands) : []
    }
  },

  positional(args, commands){
    return commands;
  },

  rich(args){
    return [args.TXOBJECT ? JSON.parse(args.TXOBJECT) : transformParamDictionary(args)]
  },


  missing(param, ...args){
    for(let i = 0; i < args.length; i++){
      if(!param.hasOwnProperty(args[i])){
        return true;
      }
    }
    return false;
  },
}

const getRetriever = (obj, commands) => (...keys) => getAndDelete(obj, commands, ...keys);

const getAndDelete = (obj, commands, ...keys) => {
  let value = false;
  for (let i = 0; i < keys.length; i++) {
    const el = keys[i];
    if(obj.hasOwnProperty(el)){
      // reassign on duplicates - make sure to delete all keys
      value = obj[el];
      delete obj[el];
    }
    const index = commands.indexOf(el);
    if( index > -1 ){
      commands = commands.splice(index, 1 );
    }
  }
  return value;
}
