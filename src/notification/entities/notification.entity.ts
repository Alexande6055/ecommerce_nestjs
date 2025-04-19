import { User } from "src/user/entities/user.entity";
import { Column, Entity, Generated, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'notifications'})
export class Notification {
    @PrimaryGeneratedColumn()
    id?:number;
    @ManyToOne(()=>User,(user)=>user.id)
    idUser:User;
    @Column()
    message:string;
    @Column()
    dateSent:Date;
    @Column()
    readStatus:Boolean;
    @Column()
    type:string


}
