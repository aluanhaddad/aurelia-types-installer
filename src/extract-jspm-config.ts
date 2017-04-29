import './polyfills/imbue-array';

export default function extractJspmConfig(jspmConfigPath: string, predicate: (packageName: string) => boolean) {
  const jspmConfig = {} as {[key: string]: {}};
  const SystemJSRestore = global.global.SystemJS;
  global.global.SystemJS = {
    config: config => {
      return Object.keys(config).map(key => [key, config[key]] as [string, {}]).reduce((cfg, [key, value]) => {
        cfg[key] = value;
        return cfg;
      }, jspmConfig);
    }
  };
  // Import config file in the context of a fake SystemJS.
  // This will call the config function passing loader config.
  require(jspmConfigPath);
  global.global.SystemJS = SystemJSRestore;
  return unrollWithFilter(jspmConfig, predicate);
}

function unrollWithFilter(o: object, predicate: (packageName: string) => boolean): string[] {
  if (!o || typeof o === 'number' || typeof o === 'boolean') {
    return [];
  }
  return Object
    .entries(o)
    .filter(([key]) => key === 'packages' || key === 'map')
    .map(([_, value]) => value)
    .flatMap(value => typeof value !== 'string'
      ? unrollWithFilter(value, predicate)
      : [value])
    .filter(value => typeof value === 'string' && predicate(value));
}