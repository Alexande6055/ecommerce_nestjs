import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeTransacctionDto } from './create-type-transacction.dto';

export class UpdateTypeTransacctionDto extends PartialType(CreateTypeTransacctionDto) {}
