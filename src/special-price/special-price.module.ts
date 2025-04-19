import { Module } from '@nestjs/common';
import { SpecialPriceService } from './special-price.service';
import { SpecialPriceController } from './special-price.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpecialPrice } from './entities/special-price.entity';

@Module({
  controllers: [SpecialPriceController],
  providers: [SpecialPriceService],
  imports:[TypeOrmModule.forFeature([SpecialPrice])]
})
export class SpecialPriceModule {}
