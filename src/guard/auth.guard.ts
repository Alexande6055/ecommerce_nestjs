import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class authGuard implements CanActivate {
    constructor(private readonly authService: AuthService) { }

    async canActivate(context: ExecutionContext) {
        const request=context.switchToHttp().getRequest();
        const token=request.headers['authorization'];
        if(!token){
            throw new UnauthorizedException('pleace send token');
        }
        try {
            const decodedToken=await this.authService.verifyIdToken(token);
            request['userUid']=decodedToken.uid;
            request['email']=decodedToken.email;
            return true;
        } catch (error) {
            throw new UnauthorizedException('invalid Token');
        }

    }
} 