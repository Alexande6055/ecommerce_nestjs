import { IsDateString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateInvoiceDto {
    @IsDateString({}, { message: 'La fecha no está en formato admitido' })
    @IsNotEmpty({ message: 'La fecha es obligatoria' })
    dateInvoice: string;
    @IsNumber()
    @IsNotEmpty()
    idUser: number;
}
