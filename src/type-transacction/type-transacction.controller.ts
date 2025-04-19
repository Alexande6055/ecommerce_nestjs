import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeTransacctionService } from './type-transacction.service';
import { CreateTypeTransacctionDto } from './dto/create-type-transacction.dto';
import { UpdateTypeTransacctionDto } from './dto/update-type-transacction.dto';

@Controller('type-transacction')
export class TypeTransacctionController {
  constructor(private readonly typeTransacctionService: TypeTransacctionService) {}

  @Post()
  create(@Body() createTypeTransacctionDto: CreateTypeTransacctionDto) {
    return this.typeTransacctionService.create(createTypeTransacctionDto);
  }

  @Get()
  findAll() {
    return this.typeTransacctionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeTransacctionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeTransacctionDto: UpdateTypeTransacctionDto) {
    return this.typeTransacctionService.update(+id, updateTypeTransacctionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeTransacctionService.remove(+id);
  }
}
