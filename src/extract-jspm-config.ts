export default function extractJspmConfig(jspmConfigPath: string, predicate: (packageName: string) => boolean) {
  const jspmConfig = {} as {[key: string]: {}};
  const SystemJSRestore = global.global.SystemJS;
  global.global.SystemJS = {
    config: config => {
      return Object.entries(config)
        .reduce((configuration, [key, value]) => {
          configuration[key] = value;
          return configuration;
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
  return Object.values(o)
    .flatMap(value => typeof value !== 'string'
      ? unrollWithFilter(value, predicate)
      : [value])
    .filter(includeConfigValue);

  function includeConfigValue(value: string) {
    return typeof value === 'string'
      && predicate(value)
      && !value.endsWith('js')
      && !value.endsWith('json');
  }
}
