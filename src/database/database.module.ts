import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Rol } from "src/rol/entities/rol.entity";
import { User } from "src/user/entities/user.entity";

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DB_HOST,
            port: 3306, 
            username: process.env.DB_USERNAME,  
            password: process.env.DB_PASSWORD,  
            database: process.env.DB_NAME, 
            entities: [User,Rol],  
            synchronize: false,  
        }),
    ],
    exports:[TypeOrmModule],

})
export class databaseModule { };