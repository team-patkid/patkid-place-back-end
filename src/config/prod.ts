import { Configuration, SupportedEnvironment } from './dto/config.dto';

const config: Configuration = {
  ENV: SupportedEnvironment.PROD,
  PORT: 8080,
};

export default config;
