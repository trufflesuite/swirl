import {HTTPProvider} from './http/http-provider';
import {JSON_RPC_METHOD} from './interfaces/json-rpc';
import {WSProvider} from './ws/ws-provider';

export default class RPC {
  host: string;

  port: number;

  provider?: HTTPProvider;

  constructor(host = 'http://0.0.0.0', port = 8545) {
    this.host = host;
    this.port = port;
    try {
      if (this.host.startsWith('http')) {
        this.provider = new HTTPProvider(host, port);
      } else {
        this.provider = new WSProvider(host, port);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  async send(method: JSON_RPC_METHOD, ...params: any[]) {
    return this.provider?.send(method, params) || new Error('CONNECTION ERROR');
  }
}
