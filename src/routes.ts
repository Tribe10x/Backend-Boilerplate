import * as express from "express";

import UserRoutes from './controllers/users/UserRoutes';

export const V1Router = express.Router();
V1Router.use('/users', UserRoutes);