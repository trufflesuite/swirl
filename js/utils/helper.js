module.exports = {
  rich(args) {
    let result;
    if( args.TXOBJECT ){
      result = JSON.parse(args.TXOBJECT);
    } else {
      result = Object.keys(args).reduce((acc, curr) => {
        if (curr.includes("--")){
          const newKey = curr.substring(2);
          acc[newKey] = args[curr];
        }
        return acc;
      }, {});
    }
    return result;
  }
}
