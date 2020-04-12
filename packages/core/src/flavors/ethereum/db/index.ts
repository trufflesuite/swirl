import {Provider} from '../../../rpc';
import {hex} from '../../../utils';

export default class DB {
  connection: Provider;

  constructor(connection: Provider) {
    this.connection = connection;
  }

  async putString(dbName: string, key: string, value: string) {
    return this.connection.rpc.send('db_putString', dbName, key, value);
  }

  async getString(dbName: string, key: string) {
    return this.connection.rpc.send('db_putString', dbName, key);
  }

  async putHex(dbName: string, key: string, value: string) {
    return this.connection.rpc.send('db_putString', dbName, key, hex(value));
  }

  async getHex(dbName: string, key: string) {
    return this.connection.rpc.send('db_putString', dbName, key);
  }
}
