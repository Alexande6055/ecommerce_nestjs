import { Module } from '@nestjs/common';
import { TypeTransacctionService } from './type-transacction.service';
import { TypeTransacctionController } from './type-transacction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeTransacction } from './entities/type-transacction.entity';

@Module({
  controllers: [TypeTransacctionController],
  providers: [TypeTransacctionService],
  imports:[TypeOrmModule.forFeature([TypeTransacction])]
})
export class TypeTransacctionModule {}
