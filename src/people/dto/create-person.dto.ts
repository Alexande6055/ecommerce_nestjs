import { Type } from "class-transformer";
import { IsObject, IsString, ValidateNested } from "class-validator";
import { User } from "src/user/entities/user.entity";

export class CreatePersonDto {

    @IsString()
    name: string;
    @IsString()
    cedula: string;
    @IsString()
    address: string;
    @IsString()
    phone: string;
    @IsObject()
    @Type(()=>User)
    @ValidateNested()
    idUser: User;
}
