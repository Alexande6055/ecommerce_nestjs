import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvoiceDetailService } from './invoice-detail.service';

@Controller('invoice-detail')
export class InvoiceDetailController {
  constructor(private readonly invoiceDetailService: InvoiceDetailService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invoiceDetailService.findOne(+id);
  }
}
