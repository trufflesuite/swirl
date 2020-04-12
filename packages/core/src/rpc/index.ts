/* eslint-disable no-console */
import {HTTPProvider} from './http/http-provider';
import {JSON_RPC_METHOD} from './interfaces/json-rpc';
import {WSProvider} from './ws/ws-provider';

export interface Provider {
  rpc: RPC;
}

const provider = (host: string, port: number) => {
  return new (host.startsWith('http') ? HTTPProvider : WSProvider)(host, port);
};

export default class RPC {
  host: string;

  port: number;

  provider: HTTPProvider | WSProvider;

  constructor(host = 'http://0.0.0.0', port = 8545) {
    this.host = host;
    this.port = port;
    try {
      this.provider = provider(host, port);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async send(method: JSON_RPC_METHOD, ...params: any[]) {
    return this.provider?.send(method, params);
  }
}
