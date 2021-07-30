"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genRandomNum = void 0;
var crypto_1 = __importDefault(require("crypto"));
var biguint_format_1 = __importDefault(require("biguint-format"));
var biguint_format_2 = __importDefault(require("biguint-format"));
var genRandomNum = function () {
    return biguint_format_2.default(biguint_format_1.default(crypto_1.default.randomBytes(8), 'dec'), 'dec');
};
exports.genRandomNum = genRandomNum;
