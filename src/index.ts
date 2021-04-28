import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {User} from "./entity/User";

import * as cors from "cors";

import * as dotenv from "dotenv";
dotenv.config();

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    // Root router needs to be imported here (i.e. after createConnection)
    // Otherwise TypeORM code initilization will run first when it gets to the controllers
    // crashing the app because connection won't be initialized.
    const { V1Router } = require("./routes");
    app.use('/api/v1', V1Router);

    // setup express app here
    app.use(cors());

    // start express server
    app.listen(3000);

    // insert new users for test
    await connection.manager.save(connection.manager.create(User, {
        firstName: "Timber",
        lastName: "Saw",
        age: 27
    }));
    await connection.manager.save(connection.manager.create(User, {
        firstName: "Phantom",
        lastName: "Assassin",
        age: 24
    }));

    console.log("Express server has started on port 3000. Open http://localhost:3000/api/v1/users to see results");

}).catch(error => console.log(error));
