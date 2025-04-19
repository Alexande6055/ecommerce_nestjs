import { Module } from '@nestjs/common';
import { UserCreditsService } from './user-credits.service';
import { UserCreditsController } from './user-credits.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCredit } from './entities/user-credit.entity';

@Module({
  controllers: [UserCreditsController],
  providers: [UserCreditsService],
  imports:[TypeOrmModule.forFeature([UserCredit])]
})
export class UserCreditsModule {}
