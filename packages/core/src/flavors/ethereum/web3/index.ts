import RPC from '../../../rpc';

export default class WEB3 {
  rpc: RPC;

  constructor(rpc: RPC) {
    this.rpc = rpc;
  }

  async clientVersion() {
    return this.rpc.send('web3_clientVersion');
  }

  async sha3() {
    return this.rpc.send('web3_sha3');
  }
}
