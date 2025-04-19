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
import { NotificationModule } from './notification/notification.module';
import { SpecialPriceModule } from './special-price/special-price.module';
import { CategorieModule } from './categorie/categorie.module';
import { ShipmentModule } from './shipment/shipment.module';
import { CarrierModule } from './carrier/carrier.module';
import { CreditTransactionModule } from './credit-transaction/credit-transaction.module';
import { TypeTransacctionModule } from './type-transacction/type-transacction.module';
import { UserCreditsModule } from './user-credits/user-credits.module';

@Module({
  imports: [CustomConfigModule, UserModule, RolModule,DatabaseModule,AuthModule, InvoiceModule, StatusModule,FirebaseModule, InvoiceDetailModule, ProductModule, NotificationModule, SpecialPriceModule, CategorieModule, ShipmentModule, CarrierModule, CreditTransactionModule, TypeTransacctionModule, UserCreditsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

