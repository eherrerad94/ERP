import express from 'express';

//here comes the url routes 
import client from './client';
import installedPart from './installedPart';
import partRequest from './partRequest';
import partRequestByClient from './partRequestByClient';
import partRequestByTechnician from './partRequestByTechnician';
import servicePartRequest from './servicePartRequest';
import serviceRequest from './serviceRequest';
import technician from './technician';
import technicalServices from './technicalServices';
import user from './user';

const PATH_API = '/api/v1';

const router = express.Router();
router.use(PATH_API,user);

router.use(PATH_API,client);
router.use(PATH_API,installedPart);
router.use(PATH_API,partRequest);
router.use(PATH_API,partRequestByClient);
router.use(PATH_API,partRequestByTechnician);
router.use(PATH_API,servicePartRequest);
router.use(PATH_API,serviceRequest);
router.use(PATH_API,technician);
router.use(PATH_API,technicalServices);


router.get(PATH_API, (req,res) => {
    res.send('Welcome to the amazing API ')
});

console.log("It\"s okay");

module.exports = router;