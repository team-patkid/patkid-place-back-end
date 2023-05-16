import * as Sentry from '@sentry/node';
import { LogMessage } from './dto/log.dto';
import { Logger } from './logger';

export class Report {
  public static error(message: LogMessage, method: string): void {
    Logger.error(message, method);
    
    Sentry.withScope((scope) => {
      if (message.data) {
        for (const key in message.data) {
          scope.setExtra(key, message.data[key]);
        }
      }
      scope.setExtra('method', method);
      scope.setLevel('error');
      Sentry.captureException(message.message);
    });
  }
}