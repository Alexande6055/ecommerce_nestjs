import { Rol } from "src/rol/entities/rol.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'Users'})
export class User {
    @PrimaryGeneratedColumn()
    id?:number;
    @Column()
    name?:string;  
    @Column()
    mail:string;
    @Column()
    cedula?:string;
    @Column()
    address?:string;
    @Column()
    phone?:string;
    @Column()
    uid:string;
    @ManyToMany(()=>Rol,(Rol)=>Rol.users,{eager:true})
    @JoinTable({name:'user_roles'})
    roles:Rol[];

}