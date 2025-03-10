import { Controller, Get, Param } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Get('verifi-token/:idToken')
    async verifyToken(@Param('idToken') idToken: string) {
        try {
            const decodedToken = await this.authService.verifyIdToken(idToken);
            return decodedToken;
        } catch (error) {
            return "error de comparacion";
        }
    }
}

