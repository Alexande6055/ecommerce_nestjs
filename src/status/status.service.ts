import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoicestatus } from './entities/invoiceStatus.entity';
import { PaymentStatus } from './entities/paymentStatus.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(Invoicestatus)
    private invoiceStatusRepository: Repository<Invoicestatus>,
    @InjectRepository(PaymentStatus)
    private paymentStatusRepository: Repository<PaymentStatus>,) { }


  async findInvoiceStatusById(id: number) {
    const statusfinded = await this.invoiceStatusRepository.findOneBy({ id: id });
    if (!statusfinded) {
      throw new Error("Error: status not find")
    }
    return statusfinded;
  }

  async findPaymentStatusById(id: number) {
    const statusfinded = await this.paymentStatusRepository.findOneBy({ id: id });
    if (!statusfinded) {
      throw new Error("Error: status not find")
    }
    return statusfinded;
  }
  create(createStatusDto: CreateStatusDto) {
    return 'This action adds a new status';
  }

  findAll() {
    return `This action returns all status`;
  }

  findOne(id: number) {
    return `This action returns a #${id} status`;
  }

}
