import { Person } from "src/people/entities/person.entity";
import { Rol } from "src/rol/entities/rol.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'Users'})
export class User {
    @PrimaryGeneratedColumn()
    id?:number;
    @Column()
    mail:string;
    @Column({unique:true})
    uid:string;
    @ManyToMany(()=>Rol,(Rol)=>Rol.users,{eager:true})
    @JoinTable({name:'user_roles'})
    roles:Rol[];

}