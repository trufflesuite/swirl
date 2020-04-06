import RPC from '../rpc';
import {hex} from '../utils';

export default class DB {
  rpc: RPC;

  constructor(rpc: RPC) {
    this.rpc = rpc;
  }

  async putString(dbName: string, key: string, value: string) {
    return this.rpc.send('db_putString', dbName, key, value);
  }

  async getString(dbName: string, key: string) {
    return this.rpc.send('db_putString', dbName, key);
  }

  async putHex(dbName: string, key: string, value: string) {
    return this.rpc.send('db_putString', dbName, key, hex(value));
  }

  async getHex(dbName: string, key: string) {
    return this.rpc.send('db_putString', dbName, key);
  }
}
