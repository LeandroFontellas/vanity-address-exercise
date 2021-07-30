"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyIfBeautyExists = void 0;
var verifyIfBeautyExists = function (base58EncodedRandomNumber) {
    var beauty = RegExp("[lL][Ee3][4aA][nN][dD][rR][oO0]", "g");
    if (beauty.exec(base58EncodedRandomNumber) !== null) {
        return true;
    }
    return false;
};
exports.verifyIfBeautyExists = verifyIfBeautyExists;
