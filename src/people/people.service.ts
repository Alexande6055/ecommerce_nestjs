import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
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


    await this.pepleRepository.update(person.id, person);

    const updatedPerson = await this.pepleRepository.findOne({ where: { id: person.id } });

    return updatedPerson;
  }



  /**
   * it method to create person is used in the User service
   */
  async create(createPersonDto: CreatePersonDto) {
    const verifyPerson = await this.findOneByCedula(createPersonDto.cedula);
    if (verifyPerson) throw new ConflictException("this person already exist");
    const personCreated = await this.pepleRepository.save(createPersonDto);
    if (!personCreated) throw new Error("Error: usuario no creado");
    return personCreated;
  }

  async findOneByCedula(cedula: string) {
    return this.pepleRepository.findOneBy({ cedula: cedula });
  }

}
