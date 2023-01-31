import type { User } from '../schema/user';
import UserSchema from '../schema/userSchema';

class UserRepository {
  public async getAll() {
    const users = await UserSchema.scan()
      .attributes(['id', 'name', 'password', 'organization'])
      .exec();

    return users;
  }

  public async createUser(user: User) {
    const users = await UserSchema.create(user);

    return users;
  }

  public async deleteUser(id: string) {
    const result = await UserSchema.delete(id);

    return result;
  }

  public async getById(id: string) {
    const result = UserSchema.get(id);

    return result as unknown as User;
  }

  public async updateUser(user: User) {
    const result = await UserSchema.update(user);

    return result;
  }
}

export default UserRepository;
