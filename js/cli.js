#!/usr/bin/env node

const { run } = require('neodoc');
const DEFAULT = `[-p --ssl --host=HOST]`;
const commands = require("./utils/commands");
const HELPTEXT = `
Usage: 
    jswirl [-h | --help] [-v | --version]
    jswirl [<command> [<args>]...] ${DEFAULT}
 
`;

const [ test, call ] = prime();
const methods = Object.keys(commands);
let command = null;

for (let i = 0; i < methods.length; i++){
    if (test(methods[i])) {
        command = commands[methods[i]];
    }
}

if(command){
    call(command);
} else {
    console.log(HELPTEXT);
}

function prime(){
    const args = run(HELPTEXT, { optionsFirst: true, smartOptions: true });
    const test = makeTest(args["<command>"]);
    const call = makeCall([args['<command>']].concat(args['<args>']));
    return [test, call]
}

function makeTest(command){
    return function reg(ex) {
        const temp = (new RegExp(ex)).test(command);
        return temp
    }
}

function makeCall(context){
    return function call(command) {
        require(`./commands/${command}.js`)(context);
    }
}
