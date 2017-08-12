import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import config from "./config/db";
import 'express-group-routes';
import ROUTES from "./routes";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());// Parse the request body into a more usabel object
app.use(bodyParser.urlencoded({ extended: true }));//Parse the request body into a www-url-encoded
app.disable("x-powered-by"); //Disable x-powered-by in rest



//Database Connection
mongoose.Promise = global.Promise;
mongoose.connection
    .openUri(config.localhost) //here comes the db url //mongoose.connect(config.localhost)
    .then(() => {
        console.log("Connected to db successfully ");
    }).catch((err) => {
        console.log("An error ocurred ", err);
        process.exit(1);
    });


app.use('/',ROUTES);

app.listen(PORT, (err) => {
    if (!err)
        console.log("App running on port " + PORT);
    else
        console.log("Error running an app ", err);
});
