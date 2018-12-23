#!/usr/bin/env node

const swirl = require("./core/index");
const neodoc = require('neodoc');
const DEFAULT = `[-p --ssl --host=HOST]`;
const HELPTEXT = `
Usage: 
    jswirl [-h | --help] [-v | --version]
    jswirl [<command> [<args>]...]
 
`;

const args = neodoc.run(HELPTEXT, { optionsFirst: true, smartOptions: true });


if (/^eth_?(s|S)endTransaction/.test(args["<command>"])) {
    require(`./commands/ethSendTransaction.js`)([args['<command>']].concat(args['<args>']));
} else {
  console.log(HELPTEXT);
}
