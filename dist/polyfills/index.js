"use strict";
var object_assign_1 = require("./object-assign");
exports.addObjectAssign = object_assign_1.default;
var object_entries_1 = require("./object-entries");
exports.addObjectEntries = object_entries_1.default;
var object_values_1 = require("./object-values");
exports.addObjectValues = object_values_1.default;
var imbue_array_1 = require("./imbue-array");
exports.imbueArray = imbue_array_1.default;
function addObjectPolyfills() {
    object_assign_1.default();
    object_entries_1.default();
    object_values_1.default();
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = addObjectPolyfills;
//# sourceMappingURL=index.js.map