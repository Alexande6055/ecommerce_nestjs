import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreatePersonDto } from 'src/people/dto/create-person.dto';
import { UpdatePersonDto } from 'src/people/dto/update-person.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('/fillPersonData')
  fillPersonData(@Body() createPersonDto: CreatePersonDto, @Request() req) {
    return this.userService.createPerson(createPersonDto, req.userUid);
  }

  @Patch('/updatePersonData')
  updatePersonAddress(@Body() updatePersonDTO: UpdatePersonDto, @Request() req) {
    return this.userService.updatePersonData(updatePersonDTO, req.userUid);
  }
  

}

