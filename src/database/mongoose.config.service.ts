import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';
import { ConfigService } from 'src/config/config.service';

export class MongooseConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: ConfigService.getConfig().DB_INFO.URI,
      user: ConfigService.getConfig().DB_INFO.USER,
      pass: ConfigService.getConfig().DB_INFO.PASSWORD,
      dbName: ConfigService.getConfig().DB_INFO.DATABASE,
    };
  }

}