export enum SupportedEnvironment {
  DEV = 'dev',
  PROD = 'prod',
}

export interface Configuration {
  ENV: SupportedEnvironment;
  PORT: number;

  //Sentry
  SENTRY_DSN: string;
}