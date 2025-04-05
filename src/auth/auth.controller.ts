import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { authGuard } from "src/guard/auth.guard";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "src/user/dto/create-user.dto";

@Controller('auth')
export class AuthController{
    constructor(private authService:AuthService){}
    @Post('/login')
    @UseGuards(authGuard)
    login(@Request() req){
        return this.authService.login(req.email,req.userUid);
    }

    @Post('/register')
    @UseGuards(authGuard)
    register(@Body() dto:CreateUserDto,@Request() req){
        return this.authService.register(dto,req.userUid);
    }


}