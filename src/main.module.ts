import { Module } from '@nestjs/common';
import { HttpErrorFilter } from './filter/http-exception-filter';
import { CommonController } from './module/common/common.controller';
import { InternalServerErrorFilter } from './filter/internal-server-error-exception';

@Module({
  imports: [],
  controllers: [CommonController],
  providers: [
    {
      provide: 'APP_FILTER',
      useClass: HttpErrorFilter,
    },
    {
      provide: 'APP_FILTER',
      useClass: InternalServerErrorFilter,
    },
  ],
})
export class MainModule {}
