import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'products'})
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
}
