"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getType = void 0;
var getType = function (obj, innerType, level) {
    if (innerType === void 0) { innerType = false; }
    if (level === void 0) { level = 1; }
    var type = "interface Interface {\n";
    if (innerType) {
        type = "{\n";
    }
    Object.entries(obj).forEach(function (_a) {
        var key = _a[0], val = _a[1];
        var _type = typeof val;
        if (_type === 'object') {
            type += "".concat('\t'.repeat(level)).concat(key, ": ").concat((0, exports.getType)(val, true, level + 1), "\n");
            return;
        }
        type += "".concat('\t'.repeat(level)).concat(key, ": ").concat(_type, "\n");
    });
    type += "".concat('\t'.repeat(level), "}");
    return type;
};
exports.getType = getType;
