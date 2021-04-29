import { Middleware } from "@decorators/express";
import * as Express from "express";

export const IsAuthorized = (Roles: string[]) => {
    return class AuthorizedMiddleware implements Middleware {
        public use(request: Express.Request, response: Express.Response, next: Express.NextFunction): void {
            console.log(Roles);
            console.log("Here goes the logic for Authentication Provider Validation...");
            next();
        }
    }
}