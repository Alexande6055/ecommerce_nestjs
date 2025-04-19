import { Module } from '@nestjs/common';
import { CarrierService } from './carrier.service';
import { CarrierController } from './carrier.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrier } from './entities/carrier.entity';

@Module({
  controllers: [CarrierController],
  providers: [CarrierService],
  imports:[TypeOrmModule.forFeature([Carrier])]
})
export class CarrierModule {}
