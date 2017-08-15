import jwt from 'jsonwebtoken';
import config from './db';

const authorization = (req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jwt.verify(req.headers.authorization.split(' ')[1], config.secretKey, (err, decode) => {
                if (err)
                    req.user = undefined;
                req.user = decode.user;
                
                next();
            });
    }
    else {
        req.user = undefined;
        next();
    }
};

const login_required = (req, res, next) => {
    let user = req.user;
    let id = user._id;
    
    if (user)
        next();
    else
        return res.status(400).json({ message: 'Unauthorized user' });
}

const admin_credentials = (req, res, next) => {
    
    let user = req.user;
    let id = user._id;
    if (user)
        if (user.cargo === 'Programador') {
            next();
        }
        else{
            return res.status(400).json({ message: 'Invalid credentials', cargo: user.cargo });
        }
    else
        return res.status(400).json({ message: 'Unauthorized user' });
}


module.exports = {
    authorization,
    login_required,
    admin_credentials
}