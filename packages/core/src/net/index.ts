import RPC from '../rpc';

export default class NET {
  rpc: RPC;

  constructor(rpc: RPC) {
    this.rpc = rpc;
  }

  async listening() {
    return this.rpc.send('net_listening');
  }

  async version() {
    return this.rpc.send('net_version');
  }

  async peerCount() {
    return this.rpc.send('net_peerCount');
  }
}
