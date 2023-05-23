import { Configuration, SupportedEnvironment } from './dto/config.dto';

const config: Configuration = {
  ENV: SupportedEnvironment.DEV,
  PORT: 3000,
  SENTRY_DSN: 'https://6b9a66caa870427e9019f74d3ef5d1ed@o4505153042186240.ingest.sentry.io/4505153046642688',

  DB_INFO: {
    URI: 'mongodb://localhost:27017',
    USER: 'patkid-admin',
    PASSWORD: 'TtK7gkBc9rU2hC',
    DATABASE: 'patkid-place',
  },
};

export default config;
