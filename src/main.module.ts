import { Module } from '@nestjs/common';
import { CommonController } from './module/common/common.controller';

@Module({
  imports: [],
  controllers: [CommonController],
})
export class MainModule {}
