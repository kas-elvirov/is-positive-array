"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPositiveArray = void 0;
function isPositiveArray(incomingValue) {
    return Array.isArray(incomingValue)
        && incomingValue.length > 0;
}
exports.isPositiveArray = isPositiveArray;
exports.default = isPositiveArray;
