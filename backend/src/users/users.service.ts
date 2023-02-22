import { Injectable } from '@nestjs/common';
import { User } from 'src/schema/user';
import UserRepository from '../services/userService';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private userRepo: UserRepository;

  constructor() {
    this.userRepo = new UserRepository();
  }

  async create(createUserDto: CreateUserDto) {
    const user: User = {
      name: createUserDto.name,
      role: createUserDto.role,
    };
    return await this.userRepo.createUser(user);
  }

  async findAll() {
    return await this.userRepo.getAll();
  }

  async findOne(id: string) {
    return await this.userRepo.getById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user: User = {
      id: id,
      name: updateUserDto.name,
      role: updateUserDto.role,
    };

    return await this.userRepo.updateUser(user);
  }

  async remove(id: string) {
    return await this.userRepo.deleteUser(id);
  }
}
