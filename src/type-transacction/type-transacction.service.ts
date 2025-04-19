import { Injectable } from '@nestjs/common';
import { CreateTypeTransacctionDto } from './dto/create-type-transacction.dto';
import { UpdateTypeTransacctionDto } from './dto/update-type-transacction.dto';

@Injectable()
export class TypeTransacctionService {
  create(createTypeTransacctionDto: CreateTypeTransacctionDto) {
    return 'This action adds a new typeTransacction';
  }

  findAll() {
    return `This action returns all typeTransacction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeTransacction`;
  }

  update(id: number, updateTypeTransacctionDto: UpdateTypeTransacctionDto) {
    return `This action updates a #${id} typeTransacction`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeTransacction`;
  }
}
