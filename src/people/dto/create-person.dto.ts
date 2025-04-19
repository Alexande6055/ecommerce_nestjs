import {  IsString } from "class-validator";

export class CreatePersonDto {

    @IsString()
    name: string;
    @IsString()
    cedula: string;
    @IsString()
    address: string;
    @IsString()
    phone: string;
}
