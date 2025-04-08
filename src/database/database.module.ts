import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { InvoiceDetail } from "src/invoice-detail/entities/invoice-detail.entity";
import { Invoice } from "src/invoice/entities/invoice.entity";
import { Product } from "src/product/entities/product.entity";
import { Rol } from "src/rol/entities/rol.entity";
import { Invoicestatus } from "src/status/entities/invoiceStatus.entity";
import { PaymentStatus } from "src/status/entities/paymentStatus.entity";
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
                Product
            ],
            synchronize: false,
        }),
    ],
    exports: [TypeOrmModule],

})
export class DatabaseModule { };