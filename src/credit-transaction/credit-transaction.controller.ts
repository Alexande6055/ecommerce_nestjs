import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreditTransactionService } from './credit-transaction.service';
import { CreateCreditTransactionDto } from './dto/create-credit-transaction.dto';
import { UpdateCreditTransactionDto } from './dto/update-credit-transaction.dto';

@Controller('credit-transaction')
export class CreditTransactionController {
  constructor(private readonly creditTransactionService: CreditTransactionService) {}

  @Post()
  create(@Body() createCreditTransactionDto: CreateCreditTransactionDto) {
    return this.creditTransactionService.create(createCreditTransactionDto);
  }

  @Get()
  findAll() {
    return this.creditTransactionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.creditTransactionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCreditTransactionDto: UpdateCreditTransactionDto) {
    return this.creditTransactionService.update(+id, updateCreditTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creditTransactionService.remove(+id);
  }
}
