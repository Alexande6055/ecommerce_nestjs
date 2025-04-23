import { Injectable } from '@nestjs/common';
import { CreateInvoiceDetailDto } from './dto/create-invoice-detail.dto';
import { Invoice } from 'src/invoice/entities/invoice.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InvoiceDetail } from './entities/invoice-detail.entity';
import { Repository } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';
import { of } from 'rxjs';
import { DataSource } from 'typeorm';
@Injectable()
export class InvoiceDetailService {
  constructor(
    @InjectRepository(InvoiceDetail)
    private readonly invoiceDetailRepository: Repository<InvoiceDetail>,
    private readonly dataSource: DataSource,
  ) { }

  async createByGroup(createInvoiceDetailDto: CreateInvoiceDetailDto[], invoice: Invoice, listProducts: Product[], querryRunner) {
    let invoiceDetail: InvoiceDetail[] = [];
    let total = 0;
    for (let i = 0; i < createInvoiceDetailDto.length; i++) {
      invoiceDetail.push({
        ...createInvoiceDetailDto[i],
        idInvoice: invoice,
        idProduct: listProducts[i],
        subTotal: listProducts[i].price * createInvoiceDetailDto[i].amount,
        price: listProducts[i].price
      });
    }
    for (const d of invoiceDetail) {
      total += d.subTotal;
    }
    const created = await querryRunner.manager.save(InvoiceDetail, invoiceDetail);
    if (created.length === 0) {
      throw new Error("Error: no se crearon los detalles de la factura")
    }

    return total;
  }


  create(createInvoiceDetailDto: CreateInvoiceDetailDto) {
    return 'This action adds a new invoiceDetail';
  }
  findOne(id: number) {
    return `This action returns a #${id} invoiceDetail`;
  }



  async bestSellingProducts() {
    const sql = await this.dataSource.query(`      
    SELECT idProductId, COUNT(*) AS total
    FROM invoice_details 
    GROUP BY idProductId 
    ORDER BY total DESC
    LIMIT 10
  `);
    return sql;
  }



  async getBestSellingProductsByCategories() {
    const sql = await this.dataSource.query(
      `
      SELECT *
      FROM (
        SELECT 
          p.*, 
          c.name AS category,
          COUNT(*) AS total_sold,
          ROW_NUMBER() OVER (PARTITION BY p.idCategoriId ORDER BY COUNT(*) DESC) AS rank_position
        FROM invoice_details id
        INNER JOIN products p ON id.idProductId = p.id
        INNER JOIN Categories c ON p.idCategoriId = c.id
        GROUP BY p.idCategoriId, p.id
      ) ranked
      WHERE rank_position <= 10;
      `
    );
    return sql;
  }




}
