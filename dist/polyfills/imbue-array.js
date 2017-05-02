"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function imbue() {
    Array.prototype.flatMap = function flatMap(elementToArray, projection) {
        var elementSelector = projection || (function (e) { return e; });
        var arraySelector = elementToArray || (function (a) {
            if (!Array.isArray(a)) {
                throw TypeError('No projection to array provided and "this" and element');
            }
            return a.map(elementSelector);
        });
        return this.map(arraySelector).reduce(function (x, y) { return x.concat(y); }, []);
    };
}
exports.default = imbue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1idWUtYXJyYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcG9seWZpbGxzL2ltYnVlLWFycmF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFDRSxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxpQkFDbEIsY0FBK0IsRUFDckMsVUFBd0I7UUFDeEIsSUFBTSxlQUFlLEdBQUcsVUFBVSxJQUFJLENBQUMsVUFBQyxDQUFLLElBQUssT0FBQSxDQUFDLEVBQUQsQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBTSxhQUFhLEdBQUcsY0FBYyxJQUFJLENBQUMsVUFBQSxDQUFDO1lBQ3hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLE1BQU0sU0FBUyxDQUFDLHdEQUF3RCxDQUFDLENBQUM7WUFDNUUsQ0FBQztZQUNELE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQVgsQ0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUMsQ0FBQztBQUNKLENBQUM7QUFiRCx3QkFhQyJ9