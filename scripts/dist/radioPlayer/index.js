"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const playerControlls_1 = __importDefault(require("../utils/playerControlls"));
class RadioPlayer extends playerControlls_1.default {
    constructor(target) {
        super(target);
    }
}
exports.default = RadioPlayer;
