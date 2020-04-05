import {Command, flags} from '@oclif/command';
import RPC from '../../utils/rpc';

export default class EthAccounts extends Command {
  static description = `Returns a list of addresses owned by client.

Parameters: none

Returns
Array of DATA, 20 Bytes - addresses owned by the client.
`;

  static examples = [`$ swirl eth_accounts
{
  "id":1,
  "jsonrpc": "2.0",
  "result": ["0xc94770007dda54cF92009BFF0dE90c06F603a09f"]
}`];

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static aliases = ['eth_accounts', 'ethAccounts'];

  async run() {
    // const {args, flags} = this.parse(EthAccounts);
    const rpc = new RPC();
    // eslint-disable-next-line no-console
    console.log(await rpc.send('eth_accounts'));
  }
}
