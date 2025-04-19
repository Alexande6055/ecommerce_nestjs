import { Carrier } from "src/carrier/entities/carrier.entity";
import { Invoice } from "src/invoice/entities/invoice.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"Shipment"})
export class Shipment {
    @PrimaryGeneratedColumn()
    id?:number;
    @Column()
    shipmentDate:Date;
    @Column()
    deliveryDate:Date;
    @Column()
    guideNumber:string;
    @Column()
    statusShipment:boolean;
    @ManyToOne(()=>Invoice,(invoice)=>invoice.id)
    idInvoice:Invoice
    @ManyToOne(()=>Carrier,(carrier)=>carrier.id)
    idCarrier:Carrier;
}
