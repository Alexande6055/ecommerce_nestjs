import { TypeTransacction } from "src/type-transacction/entities/type-transacction.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"Credit_transactions"})
export class CreditTransaction {
    @PrimaryGeneratedColumn()
    id?:number;
    @Column()
    proff_img_url:string;
    @ManyToOne(()=>TypeTransacction,(typeTransacction)=>typeTransacction.id)
    typeTransacction:TypeTransacction;
    @ManyToOne(()=>User,(user)=>user.id)
    idUser:User;

}
