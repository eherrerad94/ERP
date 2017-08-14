import express from 'express';
import clientCtrl from '../controllers/client';
import userHandler from '../controllers/user';
import auth from '../config/auth';


const app = express.Router();

app.group('/client', (router) => {
    router
        .get('/', auth.admin_credentials, (req, res) => {

            clientCtrl
                .listAll()
                .then(clientList => {
                    res.status(200).json({
                        clientList: clientList,
                        length: clientList.length
                    })
                })
                .catch(err => {
                    console.log('ERROR');
                    res.status(200).json({ error: err })
                })

        })
        .get('/:id', auth.login_required, (req, res) => {
            //console.log(req.body);
            clientCtrl
                .getOne(req.params.id)
                .then(client => {
                    res.status(200).json({ client: client });
                })
        })
        .post('/', auth.login_required, (req, res) => {
          //  console.log(req.body);
            clientCtrl.addOne(req.body)
                .then(client => {
                    return res.status(200).json({client:client});
                })
                .catch(err => {
                    return res.status(200).json({err:err});
                })
        })

});

module.exports = app;