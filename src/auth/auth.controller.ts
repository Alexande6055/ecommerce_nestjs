import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "src/user/dto/create-user.dto";

@Controller('auth')
export class AuthController{
    constructor(private authService:AuthService){}
    @Post('/login')
    login(@Request() req){
        return this.authService.login(req.email,req.userUid);
    }

    @Post('/register')
    register(@Body() dto:CreateUserDto,@Request() req){
        return this.authService.register(dto,req.userUid);
    }


}