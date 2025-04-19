import { IsString } from 'class-validator';

export class UpdateUserDto{
    @IsString()
    name?: string;
    @IsString()
    cedula?: string;
    @IsString()
    address?: string;
    @IsString()
    phone?: string;
}
