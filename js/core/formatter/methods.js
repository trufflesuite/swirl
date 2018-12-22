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
  "eth_accounts", "eth_hashrate", "eth_mining", "eth_coinbase", "eth_syncing", "eth_protocolVersion", 
  "eth_getCompilers", "eth_newBlockFilter", "eth_getWork", "eth_gasPrice", "eth_blockNumber",
  "evm_snapshot",
  "net_listening", "net_peerCount", "net_version",
  "shh_newIdentity", "shh_newGroup", "shh_version",
  "web3_clientVersion"
]);
const one = new Set(["eth_getBalance", "eth_getStorageAt", "eth_getBlockTransactionCountByHash",
  "eth_getBlockTransactionCountByNumber", "eth_getUncleCountByBlockHash", "eth_getUncleCountByBlockNumber",
  "eth_sendRawTransaction", "eth_getTransactionByHash", "eth_getTransactionReceipt", "eth_compileLLL",
  "eth_compileSolidity", "eth_compileSerpent", "eth_newPendingTransactionFilter", "eth_uninstallFilter",
  "eth_getFilterChanges", "eth_getFilterLogs", "eth_subscribe", "eth_unsubscribe",
  "evm_revert", "evm_increaseTime", "evm_mine",
  "shh_addToGroup", "shh_uninstallFilter", "shh_getFilterChanges", "shh_getMessages","shh_hasIdentity",
  "web3_sha3",
]);
const two = new Set();
const three = new Set();
