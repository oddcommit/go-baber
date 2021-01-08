import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/app-error';

import { IStorageProvider } from '@shared/container/providers/storage-provider/models/interface-storage-provider';
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

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({ user_id, avatarFileName }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Only authenticated users can change avatar.', 401);
    }

    if (user.avatar) {
      await this.storageProvider.deleteFile(user.avatar);
    }

    const fileName = await this.storageProvider.saveFile(avatarFileName);

    user.avatar = fileName;

    await this.usersRepository.save(user);

    return user;
  }
}
