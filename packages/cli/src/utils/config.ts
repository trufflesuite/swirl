/* eslint-disable no-console */
import {config as getConfig} from 'dotenv';
import envPaths from 'env-paths';
import mkdirp from 'mkdirp';
const PATHS = envPaths('swirl');

import {existsSync, writeFileSync} from 'fs';
import {join} from 'path';

export class Config {
  static current() {
    mkdirp.sync(PATHS.config);
    const location = join(PATHS.config, 'CONFIG.env');
    if (!existsSync(location)) {
      writeFileSync(location, '');
    }
    const config = getConfig({path: location});
    console.log(config);

    return config;
  }

  // constructor() {

  // }
}

Config.current();
