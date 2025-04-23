import { ConflictException, Injectable, NotFoundException, NotImplementedException, ServiceUnavailableException, UnprocessableEntityException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { DataSource, In, QueryRunner, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { CreateInvoiceDetailDto } from 'src/invoice-detail/dto/create-invoice-detail.dto';
import { CategorieService } from 'src/categorie/categorie.service';
import { UserService } from 'src/user/user.service';
import { Categorie } from 'src/categorie/entities/categorie.entity';
import { FilterProductDTO } from './dto/filter-product.dto';
import { InvoiceDetailService } from 'src/invoice-detail/invoice-detail.service';

@Injectable()
export class ProductService {
  async deleteProductsById(id:number) {
    return await this.productRepository.delete({id:id});
  }


  constructor(
    private dataSource: DataSource,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly categoryService: CategorieService,
    private readonly userService: UserService,
    private readonly invoiceDetailService:InvoiceDetailService
  ) { }


  async create(createProductDto: CreateProductDto, uid: string) {
    const people = (await this.userService.findOneUid(uid)).idPersona;
    if (!people) throw new NotFoundException("Prson not found");
    const productFind = await this.productRepository.findOne({ where: { name: createProductDto.name, idPerson: people } });
    if (productFind) throw new ConflictException("this product already exist");
    const result = await this.dataSource.transaction(async (manager) => {
      let categoriefinded = await this.categoryService.findOneName(createProductDto.categoria);
      if (!categoriefinded) {
        categoriefinded = manager.create(Categorie, { name: createProductDto.categoria });
        categoriefinded = await manager.save(categoriefinded);
      }
      const preparedProduct = manager.create(Product, {
        ...createProductDto,
        idCategori: categoriefinded,
        idPerson: people
      })
      const productCreated = await manager.save(preparedProduct)
      if (!productCreated) throw new ServiceUnavailableException("the database server is down")
      return productCreated;
    });
    return result;
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

  /**
   * this method is intended at 
   * get a number of pages total 
   * according to the number total of products 
   */
  async getTotalPages(){
    const sql=await this.productRepository.createQueryBuilder('product')
    .getCount()
    return Math.ceil(sql/25);
  }

  async getProductForFilterRelation(){

    /**
     * This method is intended 
     * to return a list of products
     * that match: category, etc.
     */
    throw new NotImplementedException("This Method is not implemented")
  }

  async filterProducts(filtrosDTO: FilterProductDTO) {
    if (filtrosDTO.isEmpty()) throw new NotFoundException("please send at least one filter");
    const sql = this.productRepository.createQueryBuilder('product')
      .innerJoin('product.idCategori', 'categori')
      .where('categori.name LIKE :categoriName', { categoriName: `%${filtrosDTO.categori ?? ""}%` })
      .andWhere('product.name LIKE :productName', { productName: `%${filtrosDTO.nameProduct ?? ""}%` });
    if (filtrosDTO.cheapperPrice) { sql.orderBy('product.price', 'ASC'); }
    if (filtrosDTO.cursor) {
      sql.take(15)
      sql.skip((filtrosDTO.cursor-1)*15)
    }
    const pagesTotal=await sql.getCount();

    const productos = await sql.getMany();
    if (Object.keys(productos).length===0){
      return this.getProductForFilterRelation();
    }
    return { 
      data:productos,
      meta:{
        totalPages:Math.ceil(pagesTotal/25)
      }
    };
  }


  async bestSellingProducts(){
   const productList= await this.invoiceDetailService.bestSellingProducts(); 
   const date=new Date();
   return {data:productList,meta:{fecha_obtenida:date}};

  }

  async getProductsOfCategori() {
    const productsBestSellingByCategorie = await this.invoiceDetailService.getBestSellingProductsByCategories();
  
    const productList = {};
  
    for (const prod of productsBestSellingByCategorie) {
      const categoria = prod.category;
  
      if (!productList[categoria]) {
        productList[categoria] = { productos: [] };
      }
  
      productList[categoria].productos.push({
        id:prod.id,
        name: prod.name,
        description: prod.description,
        stock: prod.stock,
        price: prod.price,
        categoria: prod.idCategoriId,
      });
    }
  
    return productList;
  }
  
}
