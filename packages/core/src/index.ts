import {ETH, SHH, WEB3, DB, NET} from './flavors/ethereum';
import RPC, {Provider} from './rpc';

export class Swirl {
  provider!: Provider;

  eth!: ETH;

  shh!: SHH;

  web3!: WEB3;

  db!: DB;

  net!: NET;

  constructor(host = 'http://0.0.0.0', port = 8545) {
    this.connection(host, port);
    this.enableEthereum();
  }

  connection(host: string, port: number) {
    this.provider = {
      rpc: new RPC(host, port),
    };
    return this.provider;
  }

  enableEthereum() {
    this.shh = new SHH(this.provider);
    this.eth = new ETH(this.provider);
    this.web3 = new WEB3(this.provider);
    this.db = new DB(this.provider);
    this.net = new NET(this.provider);
  }
}
