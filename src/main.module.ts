import { Module, ValidationPipe } from '@nestjs/common';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { ExceptionFilter } from './filter/exception-filter';
import { CommonController } from './module/common/common.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './database/mongoose.config.service';
import { QuestionModule } from './module/question/question.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    QuestionModule,
  ],
  controllers: [CommonController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ExceptionFilter,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class MainModule {}
