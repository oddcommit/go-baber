import { injectable, inject } from 'tsyringe';

import { IUsersRepository } from '@modules/users/repositories/interface-users-repository';

import { User } from '@modules/users/infra/typeorm/entities/user';

interface IRequest {
  user_id: string;
}

@injectable()
export class ListProvidersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<User[]> {
    const users = await this.usersRepository.findAllProviders({
      except_user_id: user_id,
    });

    return users;
  }
}
