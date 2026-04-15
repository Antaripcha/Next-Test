import { Body, Controller,Get, Post,Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUseDto } from './dto/create-use.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getUser() {
        return this.userService.getUser();
    }
    @Post()
    portUser(@Body() data: CreateUseDto) {
        console.log(data);
        return this.userService.portUser(data);
    }
    @Get(':id')
    getUserById(@Param('id') id: string) {
    return this.userService.getUserById(Number(id));
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() data: Partial<CreateUseDto>) {
        return this.userService.updateUser(Number(id), data);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.userService.deleteUser(Number(id));
    }

}
