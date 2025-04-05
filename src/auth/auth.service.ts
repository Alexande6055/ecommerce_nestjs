import { Injectable, UnauthorizedException } from "@nestjs/common";
import * as admin from 'firebase-admin';
import * as serviceAccount from './opia-1d0dd-firebase-adminsdk-fbsvc-96a84e27aa.json';
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService

    ) {
        this.initializeFirebase();
    }


    async register(dto: CreateUserDto, req: string) {

        /**
         * Completar comprobacion de validacion si el usuario ya existe para evitar problemas
         */
        return await this.userService.create(dto, req)
    }
    async login(email:string,userUid: string) {
        let user = await this.userService.findOneByFirebaseUID(userUid);
        if(!user){
            user= await this.userService.create({mail:email,uid:""},userUid)
        }
        return user;
    }

    private initializeFirebase() {
        if (!admin.apps.length) {
            const serviceAccountData = serviceAccount as admin.ServiceAccount; // Tipamos explícitamente el objeto
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccountData),
            });
        }
    }

    /**
     * OTRAS FUNCIONES CON LA CONSOLA DE FIREBASE COMO VALIDACION DE TOKENS
     */

    async verifyIdToken(idToken: string) {
        try {
            const decodedToken = await admin.auth().verifyIdToken(idToken);
            return decodedToken;
        } catch (error) {
            throw new UnauthorizedException('Invalid token');
        }
    }
}