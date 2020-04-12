export interface BaseRpcResponse {
  id: number;
  jsonrpc: '2.0';
}

export interface RPCSuccess extends BaseRpcResponse {
  result: string | boolean;
}

export interface RPCError extends BaseRpcResponse {
  error: string;
}

export type RPCResponse = RPCSuccess | RPCError;

export type RPCTAG = 'latest' | 'earliest' | 'pending';

export interface Filter {
  fromBlock: number | RPCTAG; // QUANTITY|TAG - (optional, default: "latest") Integer block number, or "latest" for the last mined block or "pending", "earliest" for not yet mined transactions.
  toBlock: number | RPCTAG; // QUANTITY|TAG - (optional, default: "latest") Integer block number, or "latest" for the last mined block or "pending", "earliest" for not yet mined transactions.
  address: string | string[]; // DATA|Array, 20 Bytes - (optional) Contract address or a list of addresses from which logs should originate.
  topics: string[]; // Array of DATA, - (optional) Array of 32 Bytes DATA topics. Topics are order-dependent. Each topic can also be an array of DATA with "or" options.
}

export interface Log extends Filter {
  blockhash: string; // DATA, 32 Bytes - (optional) With the addition of EIP-234 (Geth >= v1.8.13 or Parity >= v2.1.0), blockHash is a new filter option which restricts the logs returned to the single block with the 32-byte hash blockHash. Using blockHash is equivalent to fromBlock = toBlock = the block number with hash blockHash. If blockHash is present in the filter criteria, then neither fromBlock nor toBlock are allowed.
}

export interface Call {
  from?: string; // DATA, 20 Bytes - (optional) The address the transaction is sent from.
  to?: string; // DATA, 20 Bytes - The address the transaction is directed to.
  gas?: string; // QUANTITY - (optional) Integer of the gas provided for the transaction execution. eth_call consumes zero gas, but this parameter may be needed by some executions.
  gasPrice?: string; // QUANTITY - (optional) Integer of the gasPrice used for each paid gas
  value?: string; // QUANTITY - (optional) Integer of the value sent with this transaction
  data?: string; // DATA - (optional) Hash of the method signature and encoded parameters. For details see Ethereum Contract ABI in the Solidity documentation
}

export interface Transaction extends Call {
  nonce?: number; // QUANTITY - (optional) Integer of a nonce. This allows to overwrite your own pending transactions that use the same nonce.
}

export type JSON_RPC_METHOD = 'db_getHex' |
'db_getString' |
'db_putHex' |
'db_putString' |
'eth_accounts' |
'eth_blockNumber' |
'eth_call' |
'eth_coinbase' |
'eth_compileLLL' |
'eth_compileSerpent' |
'eth_compileSolidity' |
'eth_estimateGas' |
'eth_gasPrice' |
'eth_getBalance' |
'eth_getBlockByHash' |
'eth_getBlockByNumber' |
'eth_getBlockTransactionCountByHash' |
'eth_getBlockTransactionCountByNumber' |
'eth_getCode' |
'eth_getCompilers' |
'eth_getFilterChanges' |
'eth_getFilterLogs' |
'eth_getLogs' |
'eth_getProof' |
'eth_getStorageAt' |
'eth_getTransactionByBlockHashAndIndex' |
'eth_getTransactionByBlockNumberAndIndex' |
'eth_getTransactionByHash' |
'eth_getTransactionCount' |
'eth_getTransactionReceipt' |
'eth_getUncleByBlockHashAndIndex' |
'eth_getUncleByBlockNumberAndIndex' |
'eth_getUncleCountByBlockHash' |
'eth_getUncleCountByBlockNumber' |
'eth_getWork' |
'eth_hashrate' |
'eth_mining' |
'eth_newBlockFilter' |
'eth_newFilter' |
'eth_newPendingTransactionFilter' |
'eth_pendingTransactions' |
'eth_protocolVersion' |
'eth_sendRawTransaction' |
'eth_sendTransaction' |
'eth_sign' |
'eth_submitHashrate' |
'eth_submitWork' |
'eth_syncing' |
'eth_uninstallFilter' |
'net_listening' |
'net_peerCount' |
'net_version' |
'shh_addToGroup' |
'shh_getFilterChanges' |
'shh_getMessages'|
'shh_hasIdentity' |
'shh_newFilter' |
'shh_newGroup' |
'shh_newIdentity' |
'shh_post' |
'shh_uninstallFilter' |
'shh_version' |
'web3_clientVersion' |
'web3_sha3';
