import jwt from 'jsonwebtoken';
import config from '../config/config';
import logging from '../config/logging';
import IUser from '../interfaces/user';

const NAMESPACE = 'Auth';

const signJWT = (user: IUser) => {
    logging.info(NAMESPACE, 'Sign JWT');
    const signJWT = (user: IUser, callback: (error: Error | null, token: string | null) => void): void => {
        const timeSinchEpoch = new Date().getTime()
        const expirationTime = timeSinchEpoch + Number(config.server.token.expireTime) * 100000;
        const expirationTimeInSeconds = Math.floor(expirationTime / 1000);
        logging.info(NAMESPACE, 'Sign JWT', expirationTimeInSeconds);

        try {
            jwt.sign(
                {
                    username: user.username
                },
                config.server.token.secret,
                {
                    issuer: config.server.token.issuer,
                    algorithm: 'HS256',
                    expiresIn: expirationTimeInSeconds
                },
                (error, token) => {
                    if (error) {
                        logging.error(NAMESPACE, 'Error signing JWT', error);
                        callback(error, null);
                    } else if (token) {
                        callback(null, token);
                    }
                })
        } catch (err) {
            logging.error(NAMESPACE, 'Error signing JWT', err);
        }
    }


}

export default signJWT;