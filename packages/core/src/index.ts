import RPC from './rpc';
import ETH from './eth';

export class Core {
  rpc: RPC;

  eth: ETH;

  constructor(host = 'http://0.0.0.0', port = 8545) {
    this.rpc = new RPC(host, port);
    this.eth = new ETH(this.rpc);
  }
}
