import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Carrier } from "src/carrier/entities/carrier.entity";
import { Categorie } from "src/categorie/entities/categorie.entity";
import { CreditTransaction } from "src/credit-transaction/entities/credit-transaction.entity";
import { InvoiceDetail } from "src/invoice-detail/entities/invoice-detail.entity";
import { Invoice } from "src/invoice/entities/invoice.entity";
import { Notification } from "src/notification/entities/notification.entity";
import { Person } from "src/people/entities/person.entity";
import { Product } from "src/product/entities/product.entity";
import { Rol } from "src/rol/entities/rol.entity";
import { Shipment } from "src/shipment/entities/shipment.entity";
import { SpecialPrice } from "src/special-price/entities/special-price.entity";
import { Invoicestatus } from "src/status/entities/invoiceStatus.entity";
import { PaymentStatus } from "src/status/entities/paymentStatus.entity";
import { TypeTransacction } from "src/type-transacction/entities/type-transacction.entity";
import { UserCredit } from "src/user-credits/entities/user-credit.entity";
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
            entities: [
                User, 
                Rol, 
                Invoicestatus, 
                PaymentStatus, 
                Invoice,
                InvoiceDetail,
                Product,
                Person,
                Notification,
                SpecialPrice,
                Categorie,
                Carrier,
                Shipment,
                CreditTransaction,
                TypeTransacction,
                UserCredit
            ],
            synchronize: true,
        }),
    ],
    exports: [TypeOrmModule],

})
export class DatabaseModule { };