import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import * as path from 'path'; 

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: path.resolve(__dirname, '../../.env'), //ruta del archivo con las variables de entorno
            isGlobal: true, //permite que las variables sean accesibles globalmente
        }),
    ],
})

export class CustomConfigModule { }