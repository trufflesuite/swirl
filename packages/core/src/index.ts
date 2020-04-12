import RPC from './rpc';
import ETH from './flavors/ethereum/eth';
import SHH from './flavors/ethereum/shh';
import WEB3 from './flavors/ethereum/web3';
import DB from './flavors/ethereum/db';
import NET from './flavors/ethereum/net';

export class Swirl {
  rpc!: RPC;

  eth!: ETH;

  shh!: SHH;

  web3!: WEB3;

  db!: DB;

  net!: NET;

  constructor(host = 'http://0.0.0.0', port = 8545) {
    this.enableEthereum(new RPC(host, port));
  }

  enableEthereum(rpc: RPC) {
    this.rpc = rpc;
    this.shh = new SHH(rpc);
    this.eth = new ETH(rpc);
    this.web3 = new WEB3(rpc);
    this.db = new DB(rpc);
    this.net = new NET(rpc);
  }
}
