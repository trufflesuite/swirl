import {Provider} from '../../../rpc';

export default class NET {
  connection: Provider;

  constructor(connection: Provider) {
    this.connection = connection;
  }

  async listening() {
    return this.connection.rpc.send('net_listening');
  }

  async version() {
    return this.connection.rpc.send('net_version');
  }

  async peerCount() {
    return this.connection.rpc.send('net_peerCount');
  }
}
