"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = __importDefault(require("../config/logging"));
const NAMESPACE = 'Sample Controller';
const sampleHealtCheck = (req, res, next) => {
    logging_1.default.info(NAMESPACE, 'Sample health check');
    res.status(200).json({
        message: 'It works'
    });
};
exports.default = { sampleHealtCheck };
