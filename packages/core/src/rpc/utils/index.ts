import {RPCResponse, RPCError, JSON_RPC_METHOD} from '../interfaces/json-rpc';

export const isRPCError = (response: RPCResponse): response is RPCError => Object.prototype.hasOwnProperty.call(response, 'error');

let id = 0;
export const rpc = (method: JSON_RPC_METHOD, params: any[]) => JSON.stringify({
  id: id++,
  jsonrpc: '2.0',
  method,
  params,
});
