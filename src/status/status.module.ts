import { Module } from '@nestjs/common';
import { StatusService } from './status.service';
import { StatusController } from './status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoicestatus } from './entities/invoiceStatus.entity';
import { PaymentStatus } from './entities/paymentStatus.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentStatus,Invoicestatus])],
  controllers: [StatusController],
  providers: [StatusService],
  exports:[StatusService]
})
export class StatusModule { }
