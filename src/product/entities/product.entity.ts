import { Categorie } from "src/categorie/entities/categorie.entity";
import { Person } from "src/people/entities/person.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({name:'products'})
@Unique(['name','idPerson'])
export class Product {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    description:string;
    @Column()
    stock:number;
    @Column("decimal",{precision:10,scale:2})
    price:number;
    @ManyToOne(()=>Categorie,(categorie)=>categorie.id)
    idCategori:Categorie;
    @ManyToOne(()=>Person,(person)=>person.id)
    idPerson:Person
}
