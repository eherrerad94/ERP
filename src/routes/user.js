import userCtrl from '../controllers/user';
import express from 'express';
const app = express.Router();

app.group('/auth', (router) => {
    router
        .post('/register', (req, res) => {
            //console.log(req.body);
            userCtrl
                .register(req.body)
                .then(user => {
                    if (user.hasOwnProperty("message")) {
                        console.log('Aqui hay un error');
                        user.error.op = undefined;
                        var error = user.error.errors;
                        res.status(200)
                            .json({
                                error: error,
                                message: user.message
                            });
                    }
                    else {
                        user.contrasena = undefined;
                        user['__v'] = undefined;

                        res.status(200)
                            .json({
                                user: user,
                                message: 'User created successfully'
                            });
                    }

                })
                .catch(err => {
                    console.log("Aqui va el error :/");
                    res.status(200).json({ error: err })
                })
        })


        .post('/sign_in', (req, res) => {

           // console.log(req.body);
            userCtrl
                .sign_in(req.body.correo_electronico, req.body.contrasena)
                .then(response => {
                    res
                        .status(201)
                        .json({ response: response })
                })
                .catch(err => {
                    console.log("Err ", err)
                    res.status(200).send(err)
                });
        });
});



module.exports = app;