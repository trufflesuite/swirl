module.exports = {
  check (method){
    const params = [zero, one, two, three];
    for (let i = 0; i < params.length; i++) {
      const element = array[i];
      if (element.has(method)) {
        return i;
      }
    }
  },
  TYPES: {
    NONE: 0,
    ONE: 1,
    TWO: 2,
    THREE: 3,
  }
};

const zero = new Set([
  "eth_accounts",
  "eth_hashrate",
  "eth_mining",
  "eth_coinbase",
  "eth_syncing",
  "eth_protocolVersion",
  "eth_getCompilers",
  "eth_newBlockFilter",
  "eth_getWork",
  "net_version",
  "eth_gasPrice",
  "eth_blockNumber",
  "evm_snapshot",         // -- evm
  "net_peerCount",        // -- net
  "net_listening",
  "shh_version",          // -- shh
  "shh_newIdentity",
  "shh_newGroup",
  "web3_clientVersion"    // -- web
]);
const one = new Set([
  "eth_getBalance", 
  "eth_getStorageAt", 
  "eth_getBlockTransactionCountByHash", 
  "eth_getBlockTransactionCountByNumber", 
  "eth_getUncleCountByBlockHash", 
  "eth_getUncleCountByBlockNumber", 
  "eth_sendRawTransaction", 
  "eth_getTransactionByHash", 
  "eth_getTransactionReceipt", 
  "eth_compileLLL", 
  "eth_compileSolidity", 
  "eth_compileSerpent", 
  "eth_newPendingTransactionFilter", 
  "eth_uninstallFilter", 
  "eth_getFilterChanges", 
  "eth_getFilterLogs", 
  "eth_subscribe", 
  "eth_unsubscribe", 
  "evm_mine",             // evm
  "evm_revert", 
  "evm_increaseTime", 
  "shh_hasIdentity",      // shh
  "shh_addToGroup", 
  "shh_uninstallFilter", 
  "shh_getFilterChanges", 
  "shh_getMessages",
  "web3_sha3",            // web3
]);
const two = new Set();
const three = new Set();
