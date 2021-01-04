import { User } from '../infra/typeorm/entities/user';
import { ICreateUserDTO } from '../dtos/interface-create-user-dto';

export interface IUsersRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}
