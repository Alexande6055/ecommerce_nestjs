import { Invoicestatus } from "src/status/entities/invoiceStatus.entity";
import { PaymentStatus } from "src/status/entities/paymentStatus.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'invoices'})
export class Invoice {
    @PrimaryGeneratedColumn()
    id?:number;
    @Column()
    dateInvoice:Date;
    @Column("decimal",{precision:10,scale:2,default:0})
    total?:number;
    @ManyToOne(()=>Invoicestatus)
    invoiceStatus:Invoicestatus;
    @ManyToOne(()=>PaymentStatus)
    paymentStatus:PaymentStatus;
    @ManyToOne(()=>User,(user)=>user.id)
    idUser:User;
}
