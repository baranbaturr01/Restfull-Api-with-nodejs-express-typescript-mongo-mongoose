const getTimeStamp = (): string => {
    return new Date().toISOString();
};
const info = (namespace: string, message: string, object?: any): void => {
    if (object) {
        console.info(`${getTimeStamp()} [${namespace}] ${message}`, object);
    } else {
        console.info(`${getTimeStamp()} [${namespace}] ${message}`);
    }
};
const warn = (namespace: string, message: string, object?: any): void => {
    if (object) {
        console.warn(`${getTimeStamp()} [${namespace}] ${message}`, object);
    } else {
        console.warn(`${getTimeStamp()} [${namespace}] ${message}`);
    }
};
const error = (namespace: string, message: string, object?: any): void => {
    if (object) {
        console.error(`${getTimeStamp()} [${namespace}] ${message}`, object);
    } else {
        console.error(`${getTimeStamp()} [${namespace}] ${message}`);
    }
};
const debug = (namespace: string, message: string, object?: any): void => {
    if (object) {
        console.debug(`${getTimeStamp()} [${namespace}] ${message}`, object);
    } else {
        console.debug(`${getTimeStamp()} [${namespace}] ${message}`);
    }
};

export default {
    info,
    warn,
    error,
    debug
};
