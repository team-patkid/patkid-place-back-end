export enum SupportedEnvironment {
  DEV = 'dev',
  PROD = 'prod',
}

export interface Configuration {
  ENV: SupportedEnvironment;
  PORT: number;

  //Sentry
  SENTRY_DSN: string;

  DB_INFO: {
    URI: string,
    USER: string,
    PASSWORD: string,
    DATABASE: string,
  }
}