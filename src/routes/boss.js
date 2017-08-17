import bossCtrl from '../controllers/boss';
import express from 'express';


const app = express.Router();


app.group('/boss', (router) => {
    router
        .get('/', (req, res) => {

            bossCtrl
                .listAll()
                .then(bossList => {
                    res.status(200).json({
                        bossList: bossList,
                        length: bossList.length
                    })
                })
                .catch(err => {
                    console.log('ERROR');
                    res.status(200).json({ error: err })
                })

        })
        .get('/:id',(req, res) => {
            //console.log(req.body);
            bossCtrl
                .getOne(req.params.id)
                .then(boss => {
                    res.status(200).json({ boss: boss });
                })
        })
        .post('/', (req, res) => {
          //  console.log(req.body);
            bossCtrl.addOne(req.body)
                .then(boss => {
                    return res.status(200).json({boss:boss});
                })
                .catch(err => {
                    return res.status(200).json({err:err});
                })
        })
        .put('/:id',(req,res)=>{
            bossCtrl
            .updateOne(req.params.id,req.body)
            .then(boss=> {
                return res.status(200).json({boss:boss});
            })
            .catch(err => {
                    return res.status(200).json({err:err});
            })
        })

        .delete('/:id',(req,res)=>{
            bossCtrl
            .deleteOne(req.params.id)
            .then(boss=> {
                return res.status(200).json({boss:boss});
            })
            .catch(err => {
                    return res.status(200).json({err:err});
            })
        })

});




module.exports = app;