import { Module } from "@nestjs/common";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomConfigModule } from './config/config.module';
import { AuthModule } from "./firebase/auth.module";

@Module({
  imports: [CustomConfigModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
