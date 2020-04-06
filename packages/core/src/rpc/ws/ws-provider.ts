/* eslint-disable no-console */
import {JSON_RPC_METHOD, RPCResponse, rpc} from '../interfaces/json-rpc';
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
    this.ws = new WebSocket(`${host}:${port}`);
    this.ws.on('close', () => {
      // eslint-disable-next-line no-console
      console.log('WebSocket connection closed.');
    });
    this.connected = new Promise(resolve => {
      this.ws?.on('open', resolve);
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
      this.ws?.once('message', data => {
        resolve(data as RPCResponse);
        this.cleanUp();
      });
      this.ws?.once('error', data => {
        reject(data);
        this.cleanUp();
      });

      this.ws?.send(rpc(method, params));
    });
  }
}
