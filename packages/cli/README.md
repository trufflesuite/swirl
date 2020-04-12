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
* [`swirl autocomplete [SHELL]`](#swirl-autocomplete-shell)
* [`swirl eth:send-raw-transaction [FILE]`](#swirl-ethsend-raw-transaction-file)
* [`swirl eth:send-transaction [FILE]`](#swirl-ethsend-transaction-file)
* [`swirl help [COMMAND]`](#swirl-help-command)
* [`swirl plugins`](#swirl-plugins)
* [`swirl plugins:install PLUGIN...`](#swirl-pluginsinstall-plugin)
* [`swirl plugins:link PLUGIN`](#swirl-pluginslink-plugin)
* [`swirl plugins:uninstall PLUGIN...`](#swirl-pluginsuninstall-plugin)
* [`swirl plugins:update`](#swirl-pluginsupdate)
* [`swirl repl [PROVIDER]`](#swirl-repl-provider)

## `swirl autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ swirl autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ swirl autocomplete
  $ swirl autocomplete bash
  $ swirl autocomplete zsh
  $ swirl autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.1.5/src/commands/autocomplete/index.ts)_

## `swirl eth:send-raw-transaction [FILE]`

describe the command here

```
USAGE
  $ swirl eth:send-raw-transaction [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/eth/send-raw-transaction.ts](https://github.com/trufflesuite/swirl/blob/v0.0.0/src/commands/eth/send-raw-transaction.ts)_

## `swirl eth:send-transaction [FILE]`

describe the command here

```
USAGE
  $ swirl eth:send-transaction [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  (required) name to print
```

_See code: [src/commands/eth/send-transaction.ts](https://github.com/trufflesuite/swirl/blob/v0.0.0/src/commands/eth/send-transaction.ts)_

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

## `swirl plugins`

list installed plugins

```
USAGE
  $ swirl plugins

OPTIONS
  --core  show core plugins

EXAMPLE
  $ swirl plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.9/src/commands/plugins/index.ts)_

## `swirl plugins:install PLUGIN...`

installs a plugin into the CLI

```
USAGE
  $ swirl plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  plugin to install

OPTIONS
  -f, --force    yarn install with force flag
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command 
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in 
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ swirl plugins:add

EXAMPLES
  $ swirl plugins:install myplugin 
  $ swirl plugins:install https://github.com/someuser/someplugin
  $ swirl plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.9/src/commands/plugins/install.ts)_

## `swirl plugins:link PLUGIN`

links a plugin into the CLI for development

```
USAGE
  $ swirl plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello' 
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLE
  $ swirl plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.9/src/commands/plugins/link.ts)_

## `swirl plugins:uninstall PLUGIN...`

removes a plugin from the CLI

```
USAGE
  $ swirl plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

ALIASES
  $ swirl plugins:unlink
  $ swirl plugins:remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.9/src/commands/plugins/uninstall.ts)_

## `swirl plugins:update`

update installed plugins

```
USAGE
  $ swirl plugins:update

OPTIONS
  -h, --help     show CLI help
  -v, --verbose
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.9/src/commands/plugins/update.ts)_

## `swirl repl [PROVIDER]`

Interactive REPL

```
USAGE
  $ swirl repl [PROVIDER]

ARGUMENTS
  PROVIDER  Provider address.  Ex: http://localhost:8545

OPTIONS
  -h, --help               show CLI help
  -p, --provider=provider  Provider address.  Ex: http://localhost:8545
```

_See code: [src/commands/repl.ts](https://github.com/trufflesuite/swirl/blob/v0.0.0/src/commands/repl.ts)_
<!-- commandsstop -->
