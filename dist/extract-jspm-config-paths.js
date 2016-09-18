"use strict";
function default_1(jspmConfigPath, predicate) {
    var jspmConfig = {};
    var SystemJSRestore = global.global.SystemJS;
    global.global.SystemJS = {
        config: function (config) {
            return Object.keys(config).map(function (key) { return [key, config[key]]; }).reduce(function (cfg, _a) {
                var key = _a[0], value = _a[1];
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
        .flatMap(function (value) { return typeof value !== 'string'
        ? unrollWithFilter(value, predicate)
        : [value]; })
        .filter(function (value) { return typeof value === 'string' && predicate(value); });
}
//# sourceMappingURL=extract-jspm-config-paths.js.map