import { ArgumentsHost, Catch, HttpException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Logger } from 'src/log/logger';

@Catch(HttpException)
export class HttpErrorFilter extends BaseExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): void {
    const response = host.switchToHttp().getResponse();
    const request = host.switchToHttp().getRequest();

    Logger.info({
      message: exception.message,
      data: {
        status: exception.getStatus(),
        stack: exception.stack,
        path: request.path,
      },
    }, 'HttpErrorFilter');

    response.status(exception.getStatus()).json({
      result: false,
      message: exception.message,
    });
  }
}