"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function polyfillObjectValues() {
    if (typeof Object.values !== 'function') {
        // tslint:disable-next-line:no-any
        Object.values = function (o) {
            if (!Object) {
                throw TypeError('Cannot convert undefined or null to object');
            }
            return Object.keys(o).map(function (key) { return o[key]; });
        };
    }
}
exports.default = polyfillObjectValues;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LXZhbHVlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wb2x5ZmlsbHMvb2JqZWN0LXZhbHVlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBQ0UsRUFBRSxDQUFDLENBQUMsT0FBTyxNQUFNLENBQUMsTUFBTSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDeEMsa0NBQWtDO1FBQ2xDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFNO1lBQzlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDWixNQUFNLFNBQVMsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1lBQ2hFLENBQUM7WUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQU4sQ0FBTSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDO0lBQ0osQ0FBQztBQUNILENBQUM7QUFWRCx1Q0FVQyJ9