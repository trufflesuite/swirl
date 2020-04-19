import Conf, {Options} from 'conf';

interface Schema {
  host: string;
  port: number;
}

export class Config {
  static schema() {
    return {
      host: {
        type: 'string',
        format: 'uri',
        default: 'http://0.0.0.0',
      },
      port: {
        type: 'number',
        minimum: 1024,
        maximum: 65535,
        default: 1337,
      },
    };
  }

  static options() {
    return {
      schema: this.schema(),
    } as Options<Schema>;
  }

  static log(...args: any[]) {
    // eslint-disable-next-line no-console
    console.log(...args);
  }

  static getConfig() {
    return new Conf<Schema>(this.options());
  }

  static current(): Schema {
    const config = this.getConfig();
    const host = config.get('host');
    const port = config.get('port');
    return {host, port};
  }

  static set<K extends keyof Schema, T extends Schema[K]>(key: K, value: T) {
    const config = this.getConfig();
    config.set(key, value);
  }

  static get<K extends keyof Schema>(key: K) {
    const config = this.getConfig();
    return config.get(key);
  }

  config: Conf<Schema>;

  constructor() {
    this.config = Config.getConfig();
  }

  set<K extends keyof Schema, T extends Schema[K]>(key: K, value: T) {
    this.config.set(key, value);
  }

  get<K extends keyof Schema>(key: K) {
    return this.config.get(key);
  }

  current(): Schema {
    const host = this.config.get('host');
    const port = this.config.get('port');
    return {host, port};
  }
}
