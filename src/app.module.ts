import {  Module} from "@nestjs/common";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomConfigModule } from './config/config.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CustomConfigModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

