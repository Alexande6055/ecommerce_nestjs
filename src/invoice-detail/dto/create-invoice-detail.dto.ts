import { Type } from "class-transformer";
import { IsNumber, IsObject, IsOptional, ValidateNested } from "class-validator";
import { Invoice } from "src/invoice/entities/invoice.entity";

export class CreateInvoiceDetailDto {
    @IsNumber()
    amount: number;

    @IsOptional()
    @IsObject()
    @ValidateNested() //validar los objetos anidados dentro de un DTO (Data Transfer Object). En otras palabras, cuando un DTO tiene propiedades que son a su vez objetos con sus propias validaciones, 
    @Type(() => Invoice)
    idInvoice?: Invoice;

    @IsNumber()
    idProduct: number;

}
