"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTimeStamp = () => {
    return new Date().toISOString();
};
const info = (namespace, message, object) => {
    if (object) {
        console.info(`${getTimeStamp()} [${namespace}] ${message}`, object);
    }
    else {
        console.info(`${getTimeStamp()} [${namespace}] ${message}`);
    }
};
const warn = (namespace, message, object) => {
    if (object) {
        console.warn(`${getTimeStamp()} [${namespace}] ${message}`, object);
    }
    else {
        console.warn(`${getTimeStamp()} [${namespace}] ${message}`);
    }
};
const error = (namespace, message, object) => {
    if (object) {
        console.error(`${getTimeStamp()} [${namespace}] ${message}`, object);
    }
    else {
        console.error(`${getTimeStamp()} [${namespace}] ${message}`);
    }
};
const debug = (namespace, message, object) => {
    if (object) {
        console.debug(`${getTimeStamp()} [${namespace}] ${message}`, object);
    }
    else {
        console.debug(`${getTimeStamp()} [${namespace}] ${message}`);
    }
};
exports.default = {
    info,
    warn,
    error,
    debug
};
