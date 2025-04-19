import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService

    ) {
    }


    async register(uid:string,email:string) {

        /**
         * Completar comprobacion de validacion si el usuario ya existe para evitar problemas
         */
        return await this.userService.create(uid, email)
    }
    async login(email: string, userUid: string) {
        let user = await this.userService.findOneByFirebaseUID(userUid);
        if (!user) {
            user = await this.userService.create({ mail: email, uid: "" }, userUid)
        }
        return user;
    }

}