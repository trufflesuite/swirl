import {hex} from '../../../utils';
import {Provider} from '../../../rpc';

export default class SHH {
  connection: Provider;

  constructor(connection: Provider) {
    this.connection = connection;
  }

  async shh_addToGroup(identity: string) {
    return this.connection.rpc.send('shh_addToGroup', hex(identity));
  }

  async shh_getFilterChanges(filterID: number) {
    return this.connection.rpc.send('shh_getFilterChanges', hex(filterID));
  }

  async shh_getMessages(filterID: number) {
    return this.connection.rpc.send('shh_getMessages', hex(filterID));
  }

  async hasIdentity(identity: string) {
    return this.connection.rpc.send('shh_hasIdentity', hex(identity));
  }

  // async shh_newFilter() {
  //   return this.rpc.send('shh_newFilter');
  // }

  async newGroup() {
    return this.connection.rpc.send('shh_newGroup');
  }

  async newIdentity() {
    return this.connection.rpc.send('shh_newIdentity');
  }

  // async shh_post() {
  //   return this.rpc.send('shh_post');
  // }

  async uninstallFilter(filterID: number) {
    return this.connection.rpc.send('shh_uninstallFilter', hex(filterID));
  }

  async version() {
    return this.connection.rpc.send('shh_version');
  }
}
