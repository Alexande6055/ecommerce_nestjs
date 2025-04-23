import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Request } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FilterProductDTO } from './dto/filter-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post()
  create(@Body() createProductDto: CreateProductDto, @Request() req) {
    return this.productService.create(createProductDto, req.userUid);
  }
  @Get('/searchProductsByfilters')
  getProductsByFilters(@Body() filtersDTO: FilterProductDTO) {
    return this.productService.filterProducts(filtersDTO);
  }

  @Get('/getTheListOfBestSellingProducts')
  getListBestSellingProducts() {
    return this.productService.bestSellingProducts();
  }

  @Get()
  getProductsOfCategori(){
    return this.productService.getProductsOfCategori();
  }

  @Delete(":id")
  deleteProdutcs(@Param('id') id:number){
    return this.productService.deleteProductsById(id);
  }

}
