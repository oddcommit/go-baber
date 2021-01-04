import path from 'path';
import fs from 'fs';
import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/app-error';
import uploadConfig from '@config/upload';

import { User } from '../infra/typeorm/entities/user';
import { IUsersRepository } from '../repositories/interface-users-repository';

interface IRequest {
  user_id: string;
  avatarFileName: string;
}

@injectable()
export class UpdateUserAvatarService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ user_id, avatarFileName }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Only authenticated users can change avatar.', 401);
    }

    if (user.avatar) {
      const userVatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userVatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userVatarFilePath);
      }
    }

    user.avatar = avatarFileName;

    await this.usersRepository.save(user);

    return user;
  }
}
