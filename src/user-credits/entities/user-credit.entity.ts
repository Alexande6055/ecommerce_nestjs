import { Person } from "src/people/entities/person.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'user_credits' })
export class UserCredit {
    @PrimaryGeneratedColumn()
    id?: number;
    @Column()
    creditAmount:number
    @Column()
    creditLimit:number
    @Column()
    avaliableCredit:number
    @OneToOne(()=>Person)
    @JoinColumn()
    person:Person

}

