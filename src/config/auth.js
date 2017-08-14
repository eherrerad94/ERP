import jsonwebtoken from 'jsonwebtoken';
import config from './db';

const authorization = (req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jsonwebtoken
            .verify(req.headers.authorization.split(' ')[1], config.secretKey, (err, decode) => {
                if (err)
                    req.user = undefined;
                req.user = decode;
                //  console.log(decode);
                next();
            });
    }
    else {
        req.user = undefined;
        next();
    }
};

const login_required = (req, res, next) => {
    let user = req.user.user;
    if (user)
        next();
    else
        return res.status(400).json({ message: 'Unauthorized user' });
}

const admin_credentials = (req, res, next) => {

    let user = req.user.user;
    //console.log(user);
    if (user)
        if (user.cargo === 'Gerente') {
            console.log(user.cargo);
            next();
        }
        else{
            console.log(user.cargo);
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