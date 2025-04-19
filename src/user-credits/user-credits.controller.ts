import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserCreditsService } from './user-credits.service';
import { CreateUserCreditDto } from './dto/create-user-credit.dto';
import { UpdateUserCreditDto } from './dto/update-user-credit.dto';

@Controller('user-credits')
export class UserCreditsController {
  constructor(private readonly userCreditsService: UserCreditsService) {}

  @Post()
  create(@Body() createUserCreditDto: CreateUserCreditDto) {
    return this.userCreditsService.create(createUserCreditDto);
  }

  @Get()
  findAll() {
    return this.userCreditsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userCreditsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserCreditDto: UpdateUserCreditDto) {
    return this.userCreditsService.update(+id, updateUserCreditDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userCreditsService.remove(+id);
  }
}
