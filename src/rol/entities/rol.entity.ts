import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rol {
    @PrimaryGeneratedColumn()
    id?:number;
    @Column()
    name:string;
    @ManyToMany(()=>User,(user)=>user.roles)
    users:User[];
}
