import {Command, flags} from '@oclif/command';
import {start} from 'repl';
import {prompt} from 'inquirer';

export default class Repl extends Command {
  static description = 'Interactive REPL';

  static flags = {
    help: flags.help({char: 'h'}),
    provider: flags.string({char: 'p', description: 'Provider address.  Ex: http://localhost:8545'}),
  }

  static args = [
    {
      name: 'provider',
      description: 'Provider address.  Ex: http://localhost:8545',
    },
  ]

  private finish(provider: string) {
    provider = provider.trim();
    const state = {
      help: 'ok',
      provider: () => provider,
      setProvider: (newProvider: string) => {
        provider = newProvider;
        return provider;
      },
    };

    const myRepl = start('$wirl > ');
    Object.assign(myRepl.context, state);
  }

  async run() {
    const {args, flags} = this.parse(Repl);

    const provider = args.provider || flags.provider;
    if (provider) {
      this.finish(provider);
    } else {
      prompt([
        {
          type: 'input',
          name: 'provider',
          message: 'What is the provider: ',
        },
      ])
      .then((answers: any) => {
        this.finish(answers.provider);
      });
    }
  }
}
