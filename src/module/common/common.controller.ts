import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('common')
@Controller()
export class CommonController {
  constructor() {}

  @Get('healthcheck')
  public healthcheck(): string {
    
    return 'OK';
  }
}   