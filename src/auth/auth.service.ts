import { Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService

    ) {
    }


    async register(dto: CreateUserDto, req: string) {

        /**
         * Completar comprobacion de validacion si el usuario ya existe para evitar problemas
         */
        return await this.userService.create(dto, req)
    }
    async login(email: string, userUid: string) {
        let user = await this.userService.findOneByFirebaseUID(userUid);
        if (!user) {
            user = await this.userService.create({ mail: email, uid: "" }, userUid)
        }
        return user;
    }

}