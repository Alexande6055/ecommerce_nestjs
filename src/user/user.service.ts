import { BadRequestException, ConflictException, Injectable, NotFoundException, Request } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from 'src/rol/entities/rol.entity';
import { CreatePersonDto } from 'src/people/dto/create-person.dto';
import { PeopleService } from 'src/people/people.service';
import { UpdatePersonDto } from 'src/people/dto/update-person.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Rol)
    private rolRepository: Repository<Rol>,
    private readonly peopleService: PeopleService
  ) { }

  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({ id: id });
    if (!user) throw new NotFoundException('ERROR: user not Found');
    return user;
  }

  private isEmptyObject(obj: any): boolean {
    return !obj || Object.keys(obj).length === 0;
  }


  async updatePersonData(updatePersonDTO: UpdatePersonDto, uid: string) {
    if (!updatePersonDTO.address && !updatePersonDTO.phone) {
      throw new BadRequestException('No data was sent')
    }
    const userFinded = await this.findOneUid(uid);

    if (!userFinded.idPersona) throw new BadRequestException("register data of person")

    if (userFinded.idPersona.address === updatePersonDTO.address && userFinded.idPersona.phone === updatePersonDTO.phone) {
      return userFinded.idPersona;
    }
    return await this.peopleService.updateData(updatePersonDTO, userFinded.idPersona);
  }


  /**
   * metodo parqa crear un usuario 
   * mediante el correo y uid de Firebase
   */

  async create(uid, email) {
    //creamos una entidad de user
    const user = this.userRepository.create({
      uid: uid,
      mail: email,
      idPersona: null,
    })

    //obtenemos el rol por default USER
    const defaulRol = await this.rolRepository.findOneBy({ name: 'USER' });
    if (!defaulRol) {
      throw new NotFoundException('Problemas con la base de Datos');
    }

    //modificamos el rol de la entiddad user recien creada
    user.roles = [defaulRol];

    //guardamos el user en la base de datos
    return this.userRepository.save(user);
  }



  async findOneUid(uid: string) {
    const user = await this.userRepository.findOne({ where: { uid: uid }, relations: ['idPersona'] });
    if (!user) throw new NotFoundException('ERROR: user not Found');
    return user;
  }

  /**
   * Method to created person, it used in method of the People service
   */
  async createPerson(createPersonDTO: CreatePersonDto, uid: string) {
    const userToModify = await this.findOneUid(uid);
    if (userToModify.idPersona) throw new ConflictException("this user already have relation with a person");
    const personCreated = await this.peopleService.create(createPersonDTO);
    userToModify.idPersona = personCreated;
    const userModify = await this.userRepository.save(userToModify);
    if (!userModify) throw new Error("The user could not be modified");
    return userModify;
  }


}
