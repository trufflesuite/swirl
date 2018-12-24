#!/usr/bin/env node

const { run } = require('neodoc')
const getSubCommand = require('./utils/commands')
const docString = `
Usage:
    jswirl [-h | --help] [-v | --version]
    jswirl [<command> [<args>]...]

Commands:
    ethAccounts             Request accounts information
    ethGetBlockByHash       Request block by Hash
    ethGetBlockByNumber     Request block by number
    ethSendTransaction      Send simple transaction
    ethGetBlockBy           Get a block
`

const args = run(docString, { optionsFirst: true, smartOptions: true })
const subcommand = getSubCommand(args)

if (subcommand) {
  subcommand(args)
} else {
  console.log(docString)
}
