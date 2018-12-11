export default interface TSConfig {
  compilerOptions: {
    moduleResolution?: 'node' | 'classic';
    baseUrl?: string;
    paths: {
      [key: string]: string[];
    };
  };
}
