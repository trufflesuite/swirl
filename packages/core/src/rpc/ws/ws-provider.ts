/* eslint-disable no-console */
import {JSON_RPC_METHOD, RPCResponse} from '../interfaces/json-rpc';
import {rpc} from '../utils';
import WebSocket from 'ws';

export class WSProvider {
  host!: string;

  port!: number;

  ws?: WebSocket;

  connected!: Promise<void>;

  keepAlive!: boolean;

  constructor(host = 'ws://0.0.0.0', port = 8545, keepAlive = false) {
    this.connect(host, port, keepAlive);
  }

  connect(host: string, port: number, keepAlive: boolean) {
    this.close();
    this.host = host;
    this.port = port;
    this.keepAlive = keepAlive;

    this.connected = new Promise((resolve, reject) => {
      this.ws = new WebSocket(`${host}:${port}`);
      this.ws
      .on('error', e => reject(e.toString()))
      .on('close', () => console.log('WebSocket connection closed.'))
      .on('open', resolve);
    });
  }

  close() {
    this.ws?.close();
    this.ws = undefined;
  }

  private cleanUp() {
    if (!this.keepAlive) {
      this.close();
    }
  }

  async send(method: JSON_RPC_METHOD, params: any[] = []): Promise<RPCResponse> {
    await this.connected;
    return new Promise((resolve, reject) => {
      this.ws
        ?.once('message', data => {
          resolve(data as RPCResponse);
          this.cleanUp();
        })
        .once('error', data => {
          reject(data);
          this.cleanUp();
        })
        .send(rpc(method, params));
    });
  }
}
