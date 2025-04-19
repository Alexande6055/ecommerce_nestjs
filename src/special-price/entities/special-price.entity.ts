import { Person } from "src/people/entities/person.entity";
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"special_prices"})
export class SpecialPrice {
    @PrimaryGeneratedColumn()
    id:number
    @Column("decimal",{precision:10,scale:2})
    price:number
    @Column()
    status:boolean;
    @ManyToOne(()=>Person,(person)=>person.id)
    idPerson:Person
    @ManyToOne(()=>Product,(product)=>product.id)
    idProduct:Product
}
