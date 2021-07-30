"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeToBase58 = void 0;
var bs58_1 = require("bs58");
var encodeToBase58 = function (algumBufferOuArray) {
    return bs58_1.encode(algumBufferOuArray);
};
exports.encodeToBase58 = encodeToBase58;
