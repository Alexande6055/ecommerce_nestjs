import { Module } from '@nestjs/common';
import { CreditTransactionService } from './credit-transaction.service';
import { CreditTransactionController } from './credit-transaction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditTransaction } from './entities/credit-transaction.entity';

@Module({
  controllers: [CreditTransactionController],
  providers: [CreditTransactionService],
  imports:[TypeOrmModule.forFeature([CreditTransaction])]
})
export class CreditTransactionModule {}
