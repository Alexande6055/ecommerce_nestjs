import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'Categories'})
export class Categorie {
    @PrimaryGeneratedColumn()
    id?:number;
    @Column()
    name:string;
    
}
