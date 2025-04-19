import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"TypeTransacctions"})
export class TypeTransacction {
    @PrimaryGeneratedColumn()
    id?:number;
    @Column()
    description:string;

}
