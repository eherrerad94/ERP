import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import "express-group-routes";


const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.disable("x-powered-by");



app.listen(PORT, (err) => {
    if (!err)
        console.log("App running on port " + PORT);
    else
        console.log("Error running an app ", err);
});
