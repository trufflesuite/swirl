const commands = {}

commands["^eth(_s|S)endTransaction"] = "ethSendTransaction";
commands["^eth(_a|A)ccounts"] = "ethAccounts";

module.exports = commands;
