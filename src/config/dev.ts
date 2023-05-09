import { Configuration, SupportedEnvironment } from './dto/config.dto';

const config: Configuration = {
  ENV: SupportedEnvironment.DEV,
  PORT: 3000,
};

export default config;
