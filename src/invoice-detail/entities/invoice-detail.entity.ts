import { Invoice } from "src/invoice/entities/invoice.entity";
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('invoice_details')
export class InvoiceDetail {
    @PrimaryGeneratedColumn()
    id?:number;
    @Column()
    amount:number;
    @Column("decimal",{precision:10,scale:2})
    price:number;
    @Column("decimal",{precision:10,scale:2})
    subTotal:number;
    @ManyToOne(()=>Invoice)
    idInvoice:Invoice;
    @ManyToOne(()=>Product)
    idProduct:Product;
}

