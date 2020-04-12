import {Provider} from '../../../rpc';

export default class WEB3 {
  connection: Provider;

  constructor(connection: Provider) {
    this.connection = connection;
  }

  async clientVersion() {
    return this.connection.rpc.send('web3_clientVersion');
  }

  async sha3() {
    return this.connection.rpc.send('web3_sha3');
  }
}
