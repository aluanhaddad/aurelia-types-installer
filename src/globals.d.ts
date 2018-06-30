declare module '*.json';

declare namespace NodeJS {
  interface Global {
    SystemJS?: {
      config(config: any): void;
    };
  }
}