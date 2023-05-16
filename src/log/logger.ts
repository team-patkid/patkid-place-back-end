import rTracer from 'cls-rtracer';
import { LogLevel, LogMessage } from './dto/log.dto';

export class Logger {
  public static info(logMessage: LogMessage, method: string): void {
    console.log({
      ...(rTracer.id() ? { requestId: rTracer.id() } : {}),
      method,
      message: logMessage.message,
      ...logMessage.data,
      level: LogLevel.INFO,
    });
  }
  
  public static error(logMessage: LogMessage, method: string): void {
    console.log({
      ...(rTracer.id() ? { requestId: rTracer.id() } : {}),
      method,
      message: logMessage.message,
      ...logMessage.data,
      level: LogLevel.ERROR,
    });
  }
}