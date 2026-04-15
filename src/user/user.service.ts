import { Injectable } from '@nestjs/common';
import { CreateUseDto } from './dto/create-use.dto';
import { User } from './user.interface';

@Injectable()
export class UserService {
  private data: User[] = [];

  getUser(): User[] {
    return this.data;
  }

  portUser(data: CreateUseDto): User {
    const newUser: User = {
      id: Date.now(),
      ...data,
    };

    this.data.push(newUser);
    return newUser;
  }

  getUserById(id: number): User | undefined {
    return this.data.find(user => user.id === id);
  }

  updateUser(id: number, data: Partial<CreateUseDto>): User | undefined {
    const user = this.data.find(u => u.id === id);
    if (user) {
      Object.assign(user, data);
      return user;
    }
    return undefined;
  }

  deleteUser(id: number): boolean {
    const index = this.data.findIndex(u => u.id === id);
    if (index !== -1) {
      this.data.splice(index, 1);
      return true;
    }
    return false;
  }
}