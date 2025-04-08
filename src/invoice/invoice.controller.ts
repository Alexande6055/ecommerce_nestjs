import { Controller,  Post, Body } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { compositionInvoiceDTO } from 'src/invoice-detail/dto/create-composition.dto';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  create(@Body() compositon:compositionInvoiceDTO) {
    return this.invoiceService.create(compositon);
  }
}
