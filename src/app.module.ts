import {  Module} from "@nestjs/common";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomConfigModule } from './config/config.module';
import { UserModule } from './user/user.module';
import { RolModule } from './rol/rol.module';
import { databaseModule } from "./database/database.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [CustomConfigModule, UserModule, RolModule,databaseModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

