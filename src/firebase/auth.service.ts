import { Injectable } from "@nestjs/common";
import * as admin from 'firebase-admin';  
import * as serviceAccount from './opia-1d0dd-firebase-adminsdk-fbsvc-96a84e27aa.json'; 

@Injectable()
export class AuthService {
    constructor() {
        this.initializeFirebase();
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
            throw new Error('Invalid token');
        }
    }
}