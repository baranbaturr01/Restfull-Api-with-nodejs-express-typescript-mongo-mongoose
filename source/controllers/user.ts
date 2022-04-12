import { Request, Response, NextFunction } from "express";

import jwt from 'jsonwebtoken';
import logging from "../config/logging";
import bcryptjs from 'bcryptjs';
const NAMESPACE = 'Users'

const validateToken = (req: Request, res: Response, next: NextFunction) => {

    logging.info(NAMESPACE, 'token validate ,user authenticated');

    return res.json({
        message: 'user authenticated'
    })

}
const register = (req: Request, res: Response, next: NextFunction) => {

    const username = req.body.username
    const password = req.body.password
    bcryptjs.hash(password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({
                message: err.message,
                error: err
            })
        }
    
        //TODO: İNSERT USER İNTO DB HERE
    
    })


}
const login = (req: Request, res: Response, next: NextFunction) => {

}
const getAllUsers = (req: Request, res: Response, next: NextFunction) => {

}

export default { validateToken, register, login, getAllUsers }