import http from 'http';
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import logging from './config/logging';
import config from './config/config';
import bookRoutes from './routes/book';

import cors from 'cors';

const NAMESPACE = 'Server';

const app = express();
app.use(cors());

/** Conntect to Mongo */

mongoose.connect(config.mongo.url)
    .then((result) => {
        logging.info(NAMESPACE, 'Connected to MongoDB');
    })
    .catch(err => {
        logging.error(NAMESPACE, 'Error connecting to MongoDB', err);
    })

/* Log the request */
app.use((req, res, next) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
    });
});


/*Parse the body of the request */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
app.use('/api/books', bookRoutes);
/**DAha fazla route buraya eklenebilir*/

/**Error handling */
app.use((req, res, next) => {
    const error = new Error('Not found');
    return res.status(404).json({
        message: error.message
    });
});

/* Create the server*/
const server = http.createServer(app);

server.listen(config.server.port, () => {
    logging.info(NAMESPACE, `Server is running on port ${config.server.port}`);
});
