import {JSONRPC} from './json-rpc';
import got from 'got';

interface BaseRpcResponse {
  id: number;
  jsonrpc: '2.0';
}

interface RpcResponseSuccess extends BaseRpcResponse {
  result: string;
}

interface RpcResponseError extends BaseRpcResponse {
  error: string;
}

type rpcResponse = RpcResponseSuccess | RpcResponseError;

export default class RPC {
  host: string;

  port: number;

  constructor(host = 'http://0.0.0.0', port = 8545) {
    this.host = host;
    this.port = port;
  }

  private rpc(method: JSONRPC, params: any[]) {
    return JSON.stringify({
      id: 1337,
      jsonrpc: '2.0',
      method,
      params,
    });
  }

  async send(method: JSONRPC, params = []) {
    try {
      const body = this.rpc(method, params);
      const response = await got.post(`${this.host}:${this.port}`, {
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }).json();
      return Promise.resolve(response as unknown as rpcResponse);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
