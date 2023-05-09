import { Module, ValidationPipe } from '@nestjs/common';
import { HttpErrorFilter } from './filter/http-exception-filter';
import { CommonController } from './module/common/common.controller';
import { InternalServerErrorFilter } from './filter/internal-server-error-exception';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';

@Module({
  imports: [],
  controllers: [CommonController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
    {
      provide: APP_FILTER,
      useClass: InternalServerErrorFilter,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class MainModule {}
