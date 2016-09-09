export default function (jspmConfigPath: string, predicate: (packageName: string) => boolean) {
    const jspmConfig = {} as { [key: string]: any };
    const SystemJSRestore = global.global.SystemJS;
    global.global.SystemJS = {
        config: config => {
            return Object.keys(config).map(key => [key, config[key]] as [string, any]).reduce((cfg, [key, value]) => {
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



function unrollWithFilter(o, predicate: (packageName: string) => boolean): string[] {
    if (!o || typeof o === 'number' || typeof o === 'boolaean') {
        return [];
    }
    return Object
        .values(o)
        .flatMap(value => typeof value !== 'string'
            ? unrollWithFilter(value, predicate)
            : [value])
        .filter(value => typeof value === 'string' && predicate(value));
}
