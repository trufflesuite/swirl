# swirl
Make curl easier with ethereum bash completions.

## Usage
Enter any valid JSON RPC method and parameters

## Options
-a newAddress -p port -P protocol

## Full Example
> swirl -a localhost -p 8545 -P https eth_getTransactionByHash 0x0...
curl -H "Content-Type: application/json" -X POST --data "{'id':120,'jsonrpc':'2.0','method':'eth_getTransactionByHash','params':'0x0..'}" https://localhost:7545

### Default: http://localhost:8545
> swirl eth_getTransactionByHash 0x0...
curl -H "Content-Type: application/json" -X POST --data "{'id':120,'jsonrpc':'2.0','method':'eth_getTransactionByHash','params':'0x0..'}" http://localhost:8545

## Run consecutive calls:
> swirl eth_getTransactionByHash 0x0... eth_sendTransaction [params...]

## Installation:
chmod +x install.sh
./install.sh

### Manual installation
mkdir -p ~/bin
cp swirl ~/bin && chmod +x ~/bin/swirl

### Manual Install Bash Completion
touch ~/.bash_completion && cat swirl_completion >> ~/.bash_completion && source ~/.bashrc
