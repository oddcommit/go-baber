import { injectable, inject } from 'tsyringe';
import { isAfter, addHours } from 'date-fns';

import { AppError } from '@shared/errors/app-error';
import { IUsersRepository } from '../repositories/interface-users-repository';
import { IUserTokensRepository } from '../repositories/interface-user-tokens-repository';
import { IHashProvider } from '../providers/hash-provider/models/interface-hash-provider';

interface IRequest {
  token: string;
  password: string;
}

@injectable()
export class ResetPasswordService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ token, password }: IRequest): Promise<void> {
    const userToken = await this.userTokensRepository.findByToken(token);

    if (!userToken) {
      throw new AppError('User token does not exists');
    }

    const user = await this.usersRepository.findById(userToken.user_id);

    if (!user) {
      throw new AppError('User does not exists');
    }

    const tokenCreatedAt = userToken.created_at;
    const compareDate = addHours(tokenCreatedAt, 2);

    if (isAfter(Date.now(), compareDate)) {
      throw new AppError('Token expired');
    }

    user.password = await this.hashProvider.generateHash(password);

    await this.usersRepository.save(user);
  }
}
