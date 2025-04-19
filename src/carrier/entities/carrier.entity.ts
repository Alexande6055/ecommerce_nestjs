import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"Carriers"})
export class Carrier {
    @PrimaryGeneratedColumn()
    id?:number;
    @Column()
    name:string;
    @Column()
    phone:string;
}
