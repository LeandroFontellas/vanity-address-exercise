"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.geraNumAleatorio = void 0;
var random_bigint_1 = __importDefault(require("random-bigint"));
var geraNumAleatorio = function () {
    return random_bigint_1.default(256);
};
exports.geraNumAleatorio = geraNumAleatorio;
