#!/usr/bin/env node

const swirl = require("./core/index");
const neodoc = require('neodoc');
const DEFAULT = `[-p --ssl --host=HOST]`;
const HELPTEXT = `
Usage: 
    jswirl [-h | --help] [-v | --version]
    jswirl eth_hashrate ${DEFAULT}
    jswirl eth_accounts ${DEFAULT} 
    jswirl eth_getBalance ${DEFAULT} (HASH | --hash=HASH)
    jswirl eth_sendTransaction ${DEFAULT} (OBJECT | --to=TO --from=FROM --value=VALUE [--gas=GAS] [--gasPrice==GASPRICE] [--data=DATA] [--nonce=NONCE])
 
`;

const args = neodoc.run(HELPTEXT, { optionsFirst: true, smartOptions: true });

// (async () => {
//   const [ method, ...params ] = process.argv.slice(2);
//   console.log(await swirl(method, ...params));
// })();

console.log(args);
