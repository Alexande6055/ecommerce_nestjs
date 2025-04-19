import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class PeopleService {
  constructor(@InjectRepository(Person)
  private pepleRepository: Repository<Person>
  ) {
  }
  async create(createPersonDto: CreatePersonDto) {
    const personCreated = await this.pepleRepository.save(createPersonDto);
    if(!personCreated)throw new Error("Error: usuario no creado");
    return personCreated;
  }

  findAll() {
    return `This action returns all people`;
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }


  /**
   * controlar si el user no existe que no de error 
   * se podria crear una persona al crear el usuario solo que sin datos 
   * asi se podria evitar que no enfcuentre datos
  */
  async findForUser(user:User){
    const people=await this.pepleRepository.findOneBy({idUser:user})
    if(!people)throw new Error("Error: datos del usuario no encontrado");
    return people;
  }
  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
