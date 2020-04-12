import RPC from '../../../rpc';
import {hex} from '../../../utils';

export default class SHH {
  rpc: RPC;

  constructor(rpc: RPC) {
    this.rpc = rpc;
  }

  async shh_addToGroup(identity: string) {
    return this.rpc.send('shh_addToGroup', hex(identity));
  }

  async shh_getFilterChanges(filterID: number) {
    return this.rpc.send('shh_getFilterChanges', hex(filterID));
  }

  async shh_getMessages(filterID: number) {
    return this.rpc.send('shh_getMessages', hex(filterID));
  }

  async hasIdentity(identity: string) {
    return this.rpc.send('shh_hasIdentity', hex(identity));
  }

  // async shh_newFilter() {
  //   return this.rpc.send('shh_newFilter');
  // }

  async newGroup() {
    return this.rpc.send('shh_newGroup');
  }

  async newIdentity() {
    return this.rpc.send('shh_newIdentity');
  }

  // async shh_post() {
  //   return this.rpc.send('shh_post');
  // }

  async uninstallFilter(filterID: number) {
    return this.rpc.send('shh_uninstallFilter', hex(filterID));
  }

  async version() {
    return this.rpc.send('shh_version');
  }
}
