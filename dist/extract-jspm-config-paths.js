"use strict";
function default_1(jspmConfigPath, predicate) {
    const jspmConfig = {};
    const SystemJSRestore = global.global.SystemJS;
    global.global.SystemJS = {
        config: config => {
            return Object.keys(config).map(key => [key, config[key]]).reduce((cfg, [key, value]) => {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
function unrollWithFilter(o, predicate) {
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
//# sourceMappingURL=extract-jspm-config-paths.js.map