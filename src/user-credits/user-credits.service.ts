import { Injectable } from '@nestjs/common';
import { CreateUserCreditDto } from './dto/create-user-credit.dto';
import { UpdateUserCreditDto } from './dto/update-user-credit.dto';

@Injectable()
export class UserCreditsService {
  create(createUserCreditDto: CreateUserCreditDto) {
    return 'This action adds a new userCredit';
  }

  findAll() {
    return `This action returns all userCredits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userCredit`;
  }

  update(id: number, updateUserCreditDto: UpdateUserCreditDto) {
    return `This action updates a #${id} userCredit`;
  }

  remove(id: number) {
    return `This action removes a #${id} userCredit`;
  }
}
