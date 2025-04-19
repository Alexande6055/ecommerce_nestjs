import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PeopleService {


  constructor(@InjectRepository(Person)
  private pepleRepository: Repository<Person>
  ) {
  }

  async updateData(updatePersonDTO: UpdatePersonDto, person: Person) {
    if (updatePersonDTO.address !== undefined) {
      person.address = updatePersonDTO.address;
    }
    if (updatePersonDTO.phone !== undefined) {
      person.phone = updatePersonDTO.phone;
    }
    
    const personModifycated = await this.pepleRepository.update(person.id, person);
    return personModifycated;
  }



  /**
   * it method to create person is used in the User service
   */
  async create(createPersonDto: CreatePersonDto) {
    const personCreated = await this.pepleRepository.save(createPersonDto);
    if (!personCreated) throw new Error("Error: usuario no creado");
    return personCreated;
  }

}
