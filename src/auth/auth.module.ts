import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { authGuard } from "src/guard/auth.guard";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/user/user.module";

@Module({
    imports:[UserModule],
    controllers:[AuthController],
    providers:[AuthService,authGuard]
})
export class AuthModule{}