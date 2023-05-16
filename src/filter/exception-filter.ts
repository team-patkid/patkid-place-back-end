import { ArgumentsHost, Catch, HttpException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Report } from 'src/log/report';

@Catch()
export class ExceptionFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost): void {
    const response = host.switchToHttp().getResponse();
    const request = host.switchToHttp().getRequest();

    let status = 500;
    let message = exception.message;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = typeof exception.getResponse() === 'string' ? exception.message : (exception.getResponse() as Record<string, any>).message;
    }

    Report.error({
      message,
      data: {
        status,
        stack: exception.stack,
        path: request.path,
      },
    }, 'ExceptionFilter');

    response.status(exception.getStatus()).json({
      result: false,
      message,
    });
  }
}