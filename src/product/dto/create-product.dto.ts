import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, Min, Validate } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    @Transform(({value})=>value.toLowerCase())
    name:string;

    @IsString()
    @IsNotEmpty()
    description:string;

    @IsString()
    @IsNotEmpty()
    @Transform(({value})=>value.toLowerCase())
    categoria:string;

    @IsNumber()
    @IsNotEmpty()
    @Min(1,{message:'The product must have at least one in stock'})
    stock:number;

    @IsNumber()
    @IsNotEmpty({message:'price is required'})
    @Min(1,{message:'The product must have a price tag of at least one dollar'})
    price:number;

}
