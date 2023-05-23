import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';
import { ConfigService } from 'src/config/config.service';

export class MongooseConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: ConfigService.getConfig().MONGOOSE_INFO.URL,
      user: ConfigService.getConfig().MONGOOSE_INFO.USER,
      pass: ConfigService.getConfig().MONGOOSE_INFO.PASSWROD,
      dbName: ConfigService.getConfig().MONGOOSE_INFO.DATABASE,
    };
  }

}