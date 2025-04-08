import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('payment_status')
export class PaymentStatus {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    description:string;

}
