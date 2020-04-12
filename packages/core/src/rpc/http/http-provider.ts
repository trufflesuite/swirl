import {JSON_RPC_METHOD, RPCResponse} from '../interfaces/json-rpc';
import {rpc} from '../utils';
import got from 'got';

export class HTTPProvider {
  host: string;

  port: number;

  constructor(host = 'http://0.0.0.0', port = 8545) {
    this.host = host;
    this.port = port;
  }

  async send(method: JSON_RPC_METHOD, params: any[] = []): Promise<RPCResponse> {
    try {
      const data = await got.post(`${this.host}:${this.port}`, {
        body: rpc(method, params),
        headers: {
          'Content-Type': 'application/json',
        },
      }).json() as RPCResponse;
      return data;
    } catch (error) {
      return error.toString();
    }
  }
}
