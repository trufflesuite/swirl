# swirl
Make curl easier with ethereum bash completions.

## Usage
Enter any valid JSON RPC method and parameters

## Options
-a newAddress
-p port
-P protocol

## Full Example
```bash
swirl -a localhost -p 7545 -P https eth_getTransactionByHash 0x0...
curl -H "Content-Type: application/json" -X POST --data "{'id':120,'jsonrpc':'2.0','method':'eth_getTransactionByHash','params':'0x0..'}" https://localhost:7545
```

### Default: http://localhost:8545
```bash
swirl eth_getTransactionByHash 0x0...
curl -H "Content-Type: application/json" -X POST --data "{'id':120,'jsonrpc':'2.0','method':'eth_getTransactionByHash','params':'0x0..'}" http://localhost:8545
```

```bash
swirl eth_getBlockByNumber 0xb true
curl -H "Content-Type: application/json" -X POST --data '{"id":120,"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["0xb", true]}' http://localhost:8545
```

## Run consecutive calls:
```bash
swirl eth_getTransactionByHash 0x0... eth_sendTransaction [params...]
```

## Installation:
```bash
chmod +x install.sh
./install.sh
```

### Manual installation
```bash
mkdir -p ~/bin
cp swirl ~/bin && chmod +x ~/bin/swirl
```

### Manual Install Bash Completion
```bash
touch ~/.bash_completion && cat swirl_completion >> ~/.bash_completion && source ~/.bashrc
```
