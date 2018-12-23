#!/usr/bin/env node

const { run } = require('neodoc');
const DEFAULT = `[-p --ssl --host=HOST]`;
const HELPTEXT = `
Usage: 
    jswirl [-h | --help] [-v | --version]
    jswirl [<command> [<args>]...] ${DEFAULT}
 
`;

const args = run(HELPTEXT, { optionsFirst: true, smartOptions: true });

if(/^eth/){
    const [ test, call ] = prime(args, "eth");
    if (test(/^(_s|S)endTransaction/)) {
        call(`ethSendTransaction`);
    } else if (test(/^(_a|A)ccounts/)) {
        call(`ethAccounts`);
    }
} else {
  console.log(HELPTEXT);
}

function prime(args, type){
    const test = makeTest(args["<command>"].substring(type.length));
    const call = makeCall([args['<command>']].concat(args['<args>']));
    return [test, call]
}

function makeTest(command){
    return function reg(ex) {
        return ex.test(command);
    }
}

function makeCall(context){
    return function call(command) {
        require(`./commands/${command}.js`)(context);
    }
}
