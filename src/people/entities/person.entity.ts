import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "people" })
export class Person {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column({unique:true})
    cedula: string;
    @Column()
    address: string;
    @Column()
    phone: string;

}
