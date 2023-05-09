import { ArgumentsHost, Catch, InternalServerErrorException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Logger } from 'src/log/logger';

@Catch(InternalServerErrorException)
export class InternalServerErrorFilter extends BaseExceptionFilter {
  catch(exception: InternalServerErrorException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    const request = host.switchToHttp().getRequest();

    Logger.info({
      message: exception.message,
      data: {
        status: exception.getStatus(),
        stack: exception.stack,
        path: request.path,
      },
    }, 'InternalServerErrorFilter');

    response.status(500).json({
      result: false,
      message: exception.message,
    });
  }
}