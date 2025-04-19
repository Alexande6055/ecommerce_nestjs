import { Module } from '@nestjs/common';
import { ShipmentService } from './shipment.service';
import { ShipmentController } from './shipment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shipment } from './entities/shipment.entity';

@Module({
  controllers: [ShipmentController],
  providers: [ShipmentService],
  imports:[TypeOrmModule.forFeature([Shipment])]
})
export class ShipmentModule {}
