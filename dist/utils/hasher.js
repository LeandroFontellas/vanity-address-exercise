"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasher = void 0;
// import {hash} from 'bcrypt';
var crypto_1 = require("crypto");
var hasher = function (algumNumero) {
    var hash = crypto_1.createHash('sha256');
    hash.update(algumNumero);
    return hash.digest('hex');
};
exports.hasher = hasher;
