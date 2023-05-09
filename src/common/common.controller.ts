import { Controller, Get } from '@nestjs/common';

@Controller()
export class CommonController {
  constructor() {}

  @Get('healthcheck')
  public healthcheck(): string {
    return 'OK';
  }
}
