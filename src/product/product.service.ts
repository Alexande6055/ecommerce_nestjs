import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { In, QueryRunner, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { CreateInvoiceDetailDto } from 'src/invoice-detail/dto/create-invoice-detail.dto';

@Injectable()
export class ProductService {
 
  
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>) { }
    create(createProductDto: CreateProductDto) {
      return 'This action adds a new product';
    }
    
  findAll() {
    return `This action returns all product`;
  }
  
  findOne(id: number) {
    return `This action returns a #${id} product`;
  }
  
  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }
  
  remove(id: number) {
    return `This action removes a #${id} product`;
  }
  
  
  async findbyIdsIndeoendient(id: number[]) {
    const productList = await this.productRepository.find({ where: { id: In(id) } })
    if (productList.length === 0) {
      throw new Error("Error: no se encontraron los productos");
    }
    return productList;
  }
  
   async updateStock(listProducts: Product[], querryRunner: QueryRunner, createInvoiceDetailDto: CreateInvoiceDetailDto[]) {
      for (let i = 0; i < listProducts.length; i++) {
        listProducts[i].stock = listProducts[i].stock - createInvoiceDetailDto[i].amount;
      }
      await querryRunner.manager.save(Product, listProducts); 
  }

  }
