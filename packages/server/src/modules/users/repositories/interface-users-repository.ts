import { IFindAllProvidersDTO } from '@modules/users/dtos/interface-find-all-providers-dto';
import { User } from '../infra/typeorm/entities/user';
import { ICreateUserDTO } from '../dtos/interface-create-user-dto';

export interface IUsersRepository {
  findAllProviders(data: IFindAllProvidersDTO): Promise<User[]>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}
