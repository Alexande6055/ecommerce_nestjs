import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(10)
    mail:string;
    @IsString()
    @IsNotEmpty()
    uid:string;
}
