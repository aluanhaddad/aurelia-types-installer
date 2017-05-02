"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function polyfillObjectEntries() {
    if (typeof Object.entries !== 'function') {
        // tslint:disable-next-line:no-any
        Object.entries = function (o) {
            return Object.keys(o).map(function (key) { return [key, o[key]]; });
        };
    }
}
exports.default = polyfillObjectEntries;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LWVudHJpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcG9seWZpbGxzL29iamVjdC1lbnRyaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFDRSxFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxPQUFPLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN6QyxrQ0FBa0M7UUFDbEMsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQU07WUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFpQixFQUE3QixDQUE2QixDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDO0lBQ0osQ0FBQztBQUNILENBQUM7QUFQRCx3Q0FPQyJ9