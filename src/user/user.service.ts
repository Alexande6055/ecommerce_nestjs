import { Injectable, NotFoundException, Request } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from 'src/rol/entities/rol.entity';
import { verifiExist } from 'src/utils/controlException';

@Injectable()
export class UserService {
  findOneByFirebaseUID(userUid: string) {
    const user=this.userRepository.findOneBy({uid:userUid});
    verifiExist(user,"user");
    return user;
  }
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Rol)
    private rolRepository:Repository<Rol>,
  ) { }
  async create(createUserDto: CreateUserDto,uidUser) {
    const user = this.userRepository.create({
      uid: uidUser,
      mail: createUserDto.mail,
    })

    const defaulRol=await this.rolRepository.findOneBy({name:'USER'});
    if (!defaulRol){
      throw new NotFoundException('Problemas con la base de Datos');
    }
    user.roles=[defaulRol];
    return this.userRepository.save(user);
  }


  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: number) {
    const user =await this.userRepository.findOneBy({id:id});
    if(!user) throw new NotFoundException('ERROR: user not Found'); 
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const registeredUser=await this.userRepository.findOneBy({id:id});
    verifiExist(registeredUser,"user");

   
    return await this.userRepository.save({
      ...registeredUser,
      ...updateUserDto
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
