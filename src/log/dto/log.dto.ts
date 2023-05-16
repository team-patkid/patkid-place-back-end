export interface LogMessage {
  message: string;
  data?: Record<string, any>;
}

export enum LogLevel {
  INFO = 'INFO',
  ERROR = 'ERROR',
}