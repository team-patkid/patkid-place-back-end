import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ConfigService } from 'src/config/config.service';
import { Logger } from 'src/log/logger';
@ApiTags('common')
@Controller()
export class CommonController {
  constructor() {}

  @Get('healthcheck')
  public healthcheck(): string {
    Logger.info({
      message: `App started on env ${ConfigService.getConfig().ENV}, port ${ConfigService.getConfig().PORT}`,
    }, 'App');
    return 'OK';
  }
}   