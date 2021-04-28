import {UserController} from "./UserController";
import * as express from "express";
import { attachControllers } from '@decorators/express';

const UserRoutes = express.Router();
attachControllers(UserRoutes, [UserController]);

export default UserRoutes;