#!/usr/bin/env node

const { run } = require('neodoc');
const DEFAULT = `[-p --ssl --host=HOST]`;
const commands = require("./utils/commands");
const HELPTEXT = `
Usage: 
    jswirl [-h | --help] [-v | --version]
    jswirl [<command> [<args>]...] ${DEFAULT}

Commands:
    ethAccounts             Get accounts information
    ethSendTransaction      Send simple transaction
`;

const args = run(HELPTEXT, { optionsFirst: true, smartOptions: true });
const subcommand = commands(args);

if(subcommand) {
    subcommand();
} else {
    console.log(HELPTEXT);
}
