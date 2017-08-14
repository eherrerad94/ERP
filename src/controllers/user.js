import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/user';
import config from '../config/db';

const register = (usr) => {
    var newUser = new User(usr);
    newUser.contrasena = bcrypt.hashSync(usr.contrasena, 10);
    return newUser
        .save()
        .then(user => {
            return user;
        })
        .catch(err => {
            //console.log("Error: ", err.errors);
            var response = {
                message: 'Something went wrong',
                error: err
            }
            return response;
        })
}
const sign_in = (correo_electronico, contrasena) => {
    let message;
    return User
        .findOne({ correo_electronico: correo_electronico })
        .then(user => {
            // console.log(user);
            if (user == null) {
                message = 'Authentication failed, User not found';
                return message;

            }
            else if (user) {
                console.log(!bcrypt.compareSync(contrasena, user.contrasena));
                if (!bcrypt.compareSync(contrasena, user.contrasena)) {
                    return { message: 'Authentication failed. Wrong password.' };

                } else {
                    let userInfo = user;
                    userInfo.contrasena = undefined;
                    userInfo.created = undefined;
                    userInfo.estatus = undefined;
                    var token = jwt.sign(
                        {
                            user: userInfo
                        },
                        config.secretKey,
                        { expiresIn: 60 * 60 }
                    );
                    var decoded = jwt.decode(token);

                    return ({
                        message: "Credentials are correct, here is your token", token: token,
                        // decoded: decoded 
                    });

                }
            }

        })
        .catch(err => {
            console.log("Error: ", err);
            message = 'Something went wrong';
            return message;
        })
}

module.exports = {
    register,
    sign_in
};