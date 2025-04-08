import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('invoice_status')
export class Invoicestatus {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    description:string;

}
