swirl
=====

JSONRPC utility

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/swirl.svg)](https://npmjs.org/package/swirl)
[![Downloads/week](https://img.shields.io/npm/dw/swirl.svg)](https://npmjs.org/package/swirl)
[![License](https://img.shields.io/npm/l/swirl.svg)](https://github.com/trufflesuite/swirl/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g swirl
$ swirl COMMAND
running command...
$ swirl (-v|--version|version)
swirl/0.0.0 linux-x64 node-v12.16.1
$ swirl --help [COMMAND]
USAGE
  $ swirl COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`swirl hello [FILE]`](#swirl-hello-file)
* [`swirl help [COMMAND]`](#swirl-help-command)

## `swirl hello [FILE]`

describe the command here

```
USAGE
  $ swirl hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ swirl hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/trufflesuite/swirl/blob/v0.0.0/src/commands/hello.ts)_

## `swirl help [COMMAND]`

display help for swirl

```
USAGE
  $ swirl help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_
<!-- commandsstop -->
