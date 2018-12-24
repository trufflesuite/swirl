const transformParamDictionary = args =>
  Object.keys(args).reduce((acc, curr) => {
    if (/^--/.test(curr)) {
      const newKey = curr.substring(2)
      acc[newKey] = args[curr]
    }
    return acc
  }, {})

const rich = args =>
  args.TXOBJECT ? JSON.parse(args.TXOBJECT) : transformParamDictionary(args)

module.exports = {
  rich
}
