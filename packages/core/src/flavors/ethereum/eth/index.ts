import {hexOrQuantifier, hex} from '../../../utils';
import {RPCTAG, Call, Log, Filter, Transaction} from '../../../rpc/interfaces/json-rpc';
import {Provider} from '../../../rpc';

export default class ETH {
  connection: Provider;

  constructor(connection: Provider) {
    this.connection = connection;
  }

  async accounts() {
    return this.connection.rpc.send('eth_accounts');
  }

  async blockNumber() {
    return this.connection.rpc.send('eth_blockNumber');
  }

  async call(transaction: Call, blockNumber: number|RPCTAG) {
    return this.connection.rpc.send('eth_call', transaction, hexOrQuantifier(blockNumber));
  }

  async coinbase() {
    return this.connection.rpc.send('eth_coinbase');
  }

  // 'eth_compileLLL' | DEPRECATED
  // 'eth_compileSerpent' | DEPRECATED
  // 'eth_compileSolidity' | DEPRECATED

  async estimateGas(transaction: Call, blockNumber: number|RPCTAG) {
    return this.connection.rpc.send('eth_estimateGas', transaction, blockNumber);
  }

  async gasPrice() {
    return this.connection.rpc.send('eth_gasPrice');
  }

  async getBalance(address: string, blockNumberOrTag: number | RPCTAG) {
    return this.connection.rpc.send('eth_getBlockByHash', address, hexOrQuantifier(blockNumberOrTag));
  }

  async getBlockByHash(blockHash: string, includeTransactions = false) {
    return this.connection.rpc.send('eth_getBlockByHash', hexOrQuantifier(blockHash), includeTransactions);
  }

  async getBlockByNumber(blockNumber: string|number|RPCTAG, includeTransactions = false) {
    return this.connection.rpc.send('eth_getBlockByNumber', hexOrQuantifier(blockNumber), includeTransactions);
  }

  async getBlockTransactionCountByHash(blockHash: string) {
    return this.connection.rpc.send('eth_getBlockTransactionCountByHash', hex(blockHash));
  }

  async getBlockTransactionCountByNumber(blockNumber: string|number|RPCTAG) {
    return this.connection.rpc.send('eth_getBlockTransactionCountByNumber', hexOrQuantifier(blockNumber));
  }

  async getCode(address: string, tag: RPCTAG) {
    return this.connection.rpc.send('eth_getCode', address, tag);
  }

  // 'eth_getCompilers' | DEPRECATED

  async getFilterChanges(filterId: number) {
    return this.connection.rpc.send('eth_getFilterChanges', hex(filterId));
  }

  async getFilterLogs(filterId: number) {
    return this.connection.rpc.send('eth_getFilterLogs', hex(filterId));
  }

  async getLogs(log: Log) {
    return this.connection.rpc.send('eth_getLogs', log);
  }

  async getProof(address: string, storageKeys: string[], blockNumber: number|RPCTAG) {
    return this.connection.rpc.send('eth_getProof', address, storageKeys, blockNumber);
  }

  async getStorageAt(address: string, index: number, blockNumber: number|RPCTAG) {
    return this.connection.rpc.send('eth_getStorageAt', address, index, blockNumber);
  }

  async getTransactionByBlockHashAndIndex(hash: string, transactionIndex: number) {
    return this.connection.rpc.send('eth_getTransactionByBlockHashAndIndex', hash, hex(transactionIndex));
  }

  async getTransactionByBlockNumberAndIndex(blockNumber: string|number|RPCTAG, transactionIndex: number) {
    return this.connection.rpc.send('eth_getBlockTransactionCountByHash', hexOrQuantifier(blockNumber), hex(transactionIndex));
  }

  async getTransactionByHash(hash: string) {
    return this.connection.rpc.send('eth_getTransactionByHash', hash);
  }

  async getTransactionCount(address: string, blockNumber: number|RPCTAG) {
    return this.connection.rpc.send('eth_getTransactionCount', address, blockNumber);
  }

  async getTransactionReceipt(hash: string) {
    return this.connection.rpc.send('eth_getTransactionReceipt', hash);
  }

  async getUncleByBlockHashAndIndex(hash: string, uncleIndex: number) {
    return this.connection.rpc.send('eth_getUncleByBlockHashAndIndex', hash, hex(uncleIndex));
  }

  async getUncleByBlockNumberAndIndex(blockNumber: string|number|RPCTAG, transactionIndex: number) {
    return this.connection.rpc.send('eth_getUncleByBlockNumberAndIndex', hexOrQuantifier(blockNumber), hex(transactionIndex));
  }

  async getUncleCountByBlockHash(hash: string) {
    return this.connection.rpc.send('eth_getUncleCountByBlockHash', hash);
  }

  async getUncleCountByBlockNumber(blockNumber: string|number|RPCTAG) {
    return this.connection.rpc.send('eth_getUncleCountByBlockNumber', hexOrQuantifier(blockNumber));
  }

  async getWork() {
    return this.connection.rpc.send('eth_getWork');
  }

  async hashrate() {
    return this.connection.rpc.send('eth_hashrate');
  }

  async mining() {
    return this.connection.rpc.send('eth_mining');
  }

  async newBlockFilter() {
    return this.connection.rpc.send('eth_newBlockFilter');
  }

  async newFilter(filter: Filter) {
    return this.connection.rpc.send('eth_newFilter', filter);
  }

  async newPendingTransactionFilter() {
    return this.connection.rpc.send('eth_newPendingTransactionFilter');
  }

  async pendingTransactions() {
    return this.connection.rpc.send('eth_pendingTransactions');
  }

  async protocolVersion() {
    return this.connection.rpc.send('eth_protocolVersion');
  }

  async sendRawTransaction(data: string) {
    return this.connection.rpc.send('eth_sendRawTransaction', hex(data));
  }

  async sendTransaction(transaction: Transaction) {
    return this.connection.rpc.send('eth_sendTransaction', transaction);
  }

  async sign(address: string, message: string) {
    return this.connection.rpc.send('eth_sign', address, message);
  }

  async submitHashrate(hashrate: string, clientID: string) {
    return this.connection.rpc.send('eth_submitHashrate', hashrate, clientID);
  }

  async submitWork(nonce: string, powHash: string, digest: string) {
    return this.connection.rpc.send('eth_submitWork', hex(nonce), hex(powHash), hex(digest));
  }

  async uninstallFilter(filterId: number) {
    return this.connection.rpc.send('eth_uninstallFilter', hex(filterId));
  }

  async syncing() {
    return this.connection.rpc.send('eth_syncing');
  }
}
