import { PartialType } from '@nestjs/mapped-types';
import { CreateSpecialPriceDto } from './create-special-price.dto';

export class UpdateSpecialPriceDto extends PartialType(CreateSpecialPriceDto) {}
