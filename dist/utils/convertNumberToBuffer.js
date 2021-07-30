"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertNumberToBuffer = void 0;
var convertNumberToBuffer = function (algumNumero) {
    return Buffer.from(String(algumNumero), 'hex');
};
exports.convertNumberToBuffer = convertNumberToBuffer;
