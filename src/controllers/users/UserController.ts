import {getRepository} from "typeorm";
import {NextFunction} from "express";
import {User} from "../../entity/User";

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

    @Get('/')
    async all(@Request() request, @Response() response, next: NextFunction) {
        const users = await this.userRepository.find();
        return response.status(200).send({
            users,
        });
    }

    @Get('/:id')
    async one(@Request() request, @Response() response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    @Post('/')
    async save(@Request() request, @Response() response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    @Delete('/')
    async remove(@Request() request, @Response() response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToRemove);
    }

}