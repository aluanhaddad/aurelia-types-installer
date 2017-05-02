"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./polyfills/imbue-array");
function extractJspmConfig(jspmConfigPath, predicate) {
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
exports.default = extractJspmConfig;
function unrollWithFilter(o, predicate) {
    if (!o || typeof o === 'number' || typeof o === 'boolean') {
        return [];
    }
    return Object
        .values(o)
        .flatMap(function (value) { return typeof value !== 'string'
        ? unrollWithFilter(value, predicate)
        : [value]; })
        .filter(function (value) { return typeof value === 'string' && predicate(value) && !value.endsWith('js') && !value.endsWith('json'); });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0cmFjdC1qc3BtLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9leHRyYWN0LWpzcG0tY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQWlDO0FBRWpDLDJCQUEwQyxjQUFzQixFQUFFLFNBQTJDO0lBQzNHLElBQU0sVUFBVSxHQUFHLEVBQXlCLENBQUM7SUFDN0MsSUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDL0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDdkIsTUFBTSxFQUFFLFVBQUEsTUFBTTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBaUIsRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxFQUFZO29CQUFYLFdBQUcsRUFBRSxhQUFLO2dCQUNoRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUNqQixNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ2IsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2pCLENBQUM7S0FDRixDQUFDO0lBQ0Ysd0RBQXdEO0lBQ3hELDREQUE0RDtJQUM1RCxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDakQsQ0FBQztBQWhCRCxvQ0FnQkM7QUFFRCwwQkFBMEIsQ0FBUyxFQUFFLFNBQTJDO0lBQzlFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsSUFBSSxPQUFPLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0QsTUFBTSxDQUFDLE1BQU07U0FDVixNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ1QsT0FBTyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxLQUFLLEtBQUssUUFBUTtVQUN2QyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDO1VBQ2xDLENBQUMsS0FBSyxDQUFDLEVBRk8sQ0FFUCxDQUFDO1NBQ1gsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFqRyxDQUFpRyxDQUFDLENBQUM7QUFDeEgsQ0FBQyJ9