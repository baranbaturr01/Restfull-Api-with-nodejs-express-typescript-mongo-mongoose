"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SERVER_PORT = process.env.SERVER_PORT || 3007;
const SERVER_HOST = process.env.SERVER_HOST || 'localhost';
const SERVER = {
    hostname: SERVER_HOST,
    port: SERVER_PORT
};
const config = {
    server: SERVER
};
exports.default = config;
