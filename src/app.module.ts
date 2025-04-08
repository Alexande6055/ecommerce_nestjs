import {  Module} from "@nestjs/common";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomConfigModule } from './config/config.module';
import { UserModule } from './user/user.module';
import { RolModule } from './rol/rol.module';
import { DatabaseModule } from "./database/database.module";
import { AuthModule } from "./auth/auth.module";
import { InvoiceModule } from './invoice/invoice.module';
import { StatusModule } from './status/status.module';
import { FirebaseModule } from "./firebase/firebase.module";
import { InvoiceDetailModule } from './invoice-detail/invoice-detail.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [CustomConfigModule, UserModule, RolModule,DatabaseModule,AuthModule, InvoiceModule, StatusModule,FirebaseModule, InvoiceDetailModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

