import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { UserModule } from 'src/user/user.module';
import { CategorieModule } from 'src/categorie/categorie.module';
import { InvoiceDetailModule } from 'src/invoice-detail/invoice-detail.module';

@Module({
  imports:[TypeOrmModule.forFeature([Product]),UserModule,CategorieModule,InvoiceDetailModule],
  controllers: [ProductController],
  providers: [ProductService],
  exports:[ProductService],
})
export class ProductModule {}
