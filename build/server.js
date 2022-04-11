"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const logging_1 = __importDefault(require("./config/logging"));
const config_1 = __importDefault(require("./config/config"));
const sample_1 = __importDefault(require("./routes/sample"));
const NAMESPACE = 'Server';
const app = (0, express_1.default)();
app.use((req, res, next) => {
    logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);
    res.on('finish', () => {
        logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
    });
});
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
//rules our API(middleware)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});
/**ROUTES */
app.use('/sample', sample_1.default);
/**Error handling */
app.use((req, res, next) => {
    const error = new Error('Not found');
    return res.status(404).json({
        message: error.message
    });
});
/* Create the server*/
const server = http_1.default.createServer(app);
server.listen(config_1.default.server.port, () => {
    logging_1.default.info(NAMESPACE, `Server is running on port ${config_1.default.server.port}`);
});
