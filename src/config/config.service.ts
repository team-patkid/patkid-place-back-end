import { Configuration, SupportedEnvironment } from './dto/config.dto';
import dev from './dev';
import prod from './prod';

export class ConfigService {
  private static config = {
    [SupportedEnvironment.DEV]: dev,
    [SupportedEnvironment.PROD]: prod,
  };

  public static getConfig(): Configuration {
    return this.config[process.env.NODE_ENV];
  }
}