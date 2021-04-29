import {getRepository} from "typeorm";
import {NextFunction} from "express";
import {User} from "../../entity/User";

import { IsAuthorized } from "../../middlewares/IsAuthorized";

import { StatusCodes } from "http-status-codes";

import {
    Controller,
    Delete,
    Get,
    Post,
    Request,
    Response,
} from '@decorators/express';

@Controller('/')
export class UserController {

    private userRepository = getRepository(User);

    @Get('/', [IsAuthorized(['Admin', 'User'])])
    async all(@Request() request, @Response() response, next: NextFunction) {
        const users = await this.userRepository.find();
        return response.status(StatusCodes.OK).send({
            users,
        });
    }

    @Get('/:id')
    async one(@Request() request, @Response() response, next: NextFunction) {
        const user = await this.userRepository.findOne(request.params.id);
        return response.status(StatusCodes.OK).send({
            ...user,
        });
    }

    @Post('/')
    async save(@Request() request, @Response() response, next: NextFunction) {
        const user = await this.userRepository.save(request.body);
        return response.status(StatusCodes.CREATED).send({
            ...user,
        });
    }

    @Delete('/')
    async remove(@Request() request, @Response() response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToRemove);
        return response.status(StatusCodes.OK).send({
            ...userToRemove,
        });
    }

}