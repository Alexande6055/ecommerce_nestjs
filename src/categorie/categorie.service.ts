import { Injectable } from '@nestjs/common';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categorie } from './entities/categorie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategorieService {
  constructor(
    @InjectRepository(Categorie)
    private readonly categorieRepository:Repository<Categorie>
  ){}
  async create(createCategorieDto: CreateCategorieDto) {
    return await this.categorieRepository.save(createCategorieDto);
  }

  findAll() {
    return this.categorieRepository.find();
  }

  async findOneName(name:string) {
    return await this.categorieRepository.findOneBy({name:name})
  }

}
