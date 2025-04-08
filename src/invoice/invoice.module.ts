import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoice } from './entities/invoice.entity';
import { UserModule } from 'src/user/user.module';
import { StatusModule } from 'src/status/status.module';
import { InvoiceDetailModule } from 'src/invoice-detail/invoice-detail.module';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports:[TypeOrmModule.forFeature([Invoice]),UserModule,StatusModule,InvoiceDetailModule,ProductModule],
  controllers: [InvoiceController],
  providers: [InvoiceService],
})
export class InvoiceModule {}
