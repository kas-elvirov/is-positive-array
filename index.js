"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPositiveArray(incomingValue) {
    return Array.isArray(incomingValue)
        && incomingValue.length > 0;
}
exports.default = isPositiveArray;
