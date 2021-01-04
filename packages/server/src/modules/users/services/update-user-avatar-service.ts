import path from 'path';
import fs from 'fs';
import { getRepository } from 'typeorm';

import { AppError } from '@shared/errors/app-error';
import uploadConfig from '@config/upload';

import { User } from '../infra/typeorm/entities/user';

interface Request {
  user_id: string;
  avatarFileName: string;
}

export class UpdateUserAvatarService {
  public async execute({ user_id, avatarFileName }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(user_id);

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

    await userRepository.save(user);

    return user;
  }
}
