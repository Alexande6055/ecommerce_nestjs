import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from './entities/invoice.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { compositionInvoiceDTO } from 'src/invoice-detail/dto/create-composition.dto';
import { InvoiceDetailService } from 'src/invoice-detail/invoice-detail.service';
import { StatusService } from 'src/status/status.service';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private invoiceRepository: Repository<Invoice>,
    private readonly statusService: StatusService,
    private readonly userService: UserService,
    private readonly invoiceDetailService: InvoiceDetailService,
    private readonly productService: ProductService
  ) { }
  async create(composition: compositionInvoiceDTO) {
    /**
     * Controlar el haceptar una factura con varios registros del mismo producto 
     * 1.-Unir los detalles en uno solo y sumar las cantidades (Optima)
     */
    const createInvoiceDto = composition.createInvoiceDto;
    const paymentStatus = await this.statusService.findPaymentStatusById(1);
    const invoiceStatus = await this.statusService.findInvoiceStatusById(1);
    const user = await this.userService.findOne(createInvoiceDto.idUser);
    const listProducts = await this.productService.findbyIdsIndeoendient(composition.createInvoiceDetailDto.map((detail) => detail.idProduct));
    const querryRunner = this.invoiceRepository.manager.connection.createQueryRunner();
    await querryRunner.startTransaction();
    try {
      await this.productService.updateStock( listProducts, querryRunner, composition.createInvoiceDetailDto );
      const invoice = new Invoice();
      invoice.dateInvoice = new Date(createInvoiceDto.dateInvoice);
      invoice.idUser = user;
      invoice.invoiceStatus = invoiceStatus;
      invoice.paymentStatus = paymentStatus;
      const invoiceSave = await querryRunner.manager.save(invoice);
      const total = await this.invoiceDetailService.createByGroup(composition.createInvoiceDetailDto, invoiceSave, listProducts, querryRunner);

      invoice.total = total;
      await querryRunner.manager.update(Invoice, invoiceSave.id, invoiceSave);

      await querryRunner.commitTransaction();
      return invoice;

    } catch (error) {
      /**
       * Implementar guardado de logs
       */
      console.log(error)
      await querryRunner.rollbackTransaction();
      throw new Error("invoice not generated try againg later");
    } finally {
      await querryRunner.release();
    }

  }

}
