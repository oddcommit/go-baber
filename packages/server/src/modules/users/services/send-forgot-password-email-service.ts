import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/app-error';
import { IMailProvider } from '@shared/container/providers/mail-provider/models/interface-mail-provider';

import { IUsersRepository } from '../repositories/interface-users-repository';
import { IUserTokensRepository } from '../repositories/interface-user-tokens-repository';

// import { User } from '../infra/typeorm/entities/user';

interface IRequest {
  email: string;
}

@injectable()
export class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider,

    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository,
  ) {}

  public async execute({ email }: IRequest): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('User does not exists.');
    }

    await this.userTokensRepository.generate(user.id);

    this.mailProvider.sendMail(
      email,
      'Pedido de recuperação de senha recebido',
    );
  }
}
