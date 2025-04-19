import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "people" })
export class Person {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    cedula: string;
    @Column()
    address: string;
    @Column()
    phone: string;
    @OneToOne(()=>User)
    @JoinColumn()
    idUser:User;

}
