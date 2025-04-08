import { Type } from "class-transformer";
import { IsObject, ValidateNested } from "class-validator";
import { CreateInvoiceDetailDto } from "./create-invoice-detail.dto";
import { CreateInvoiceDto } from "src/invoice/dto/create-invoice.dto";

export class compositionInvoiceDTO {
    @IsObject({ each: true })  
    @ValidateNested({ each: true })  
    @Type(() => CreateInvoiceDto)
    createInvoiceDto: CreateInvoiceDto;

    @IsObject({ each: true }) 
    @ValidateNested({ each: true })  
    @Type(() => CreateInvoiceDetailDto)
    createInvoiceDetailDto: CreateInvoiceDetailDto[];
}