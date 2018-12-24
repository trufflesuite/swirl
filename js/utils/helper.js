const { run } = require('neodoc');

const transformParamDictionary = args =>
  Object.keys(args).reduce((acc, curr) => {
    if (/^--/.test(curr)) {
      const newKey = curr.substring(2)
      acc[newKey] = args[curr]
    }
    return acc
  }, {})


module.exports = {
  rich: args => [args.TXOBJECT ? JSON.parse(args.TXOBJECT) : transformParamDictionary(args)],

  run(method, HELPTEXT, argv, formatter){
    const args = run(HELPTEXT, { argv: argv, smartOptions: true });
    const port = args["-p"] | args["--port"];
    delete args["-p"]; delete args["--port"];
    const host = args["--host"];
    delete args["--host"];
    const protocol = args["--ssl"];
    delete args["--ssl"];
    const address = {port, host, protocol}
    return {
      address,
      method,
      params: formatter ? formatter(args) : []
    }
  },

  missing(param, ...args){
    for(let i = 0; i < args.length; i++){
      if(!param.hasOwnProperty(args[i])){
        return true;
      }
    }
    return false;
  }
}
