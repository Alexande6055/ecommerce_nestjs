import { PartialType } from '@nestjs/mapped-types';
import { CreateUserCreditDto } from './create-user-credit.dto';

export class UpdateUserCreditDto extends PartialType(CreateUserCreditDto) {}
