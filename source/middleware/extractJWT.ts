import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';
import config from '../config/config';

const NAMESPACE = 'Auth';

const extractJWT = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Validate Token');
    const token = req.headers.authorization?.split(' ')[1];

    if (token) {

        jwt.verify(token, config.server.token.secret, (err, decoded) => {
            if (err) {
                logging.error(NAMESPACE, 'Error validating token', err);
                return res.status(404).json({
                    message: err.message,
                    error: err
                });
            }
            res.locals.jwt = decoded
            next();
        })
    }
    return res.status(401).json({
        message: 'Unauthorized'
    })
}

export default extractJWT;
