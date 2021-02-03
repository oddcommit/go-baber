import { UserToken } from '../infra/typeorm/entities/user-token';

export interface IUserTokensRepository {
  generate(user_id: string): Promise<UserToken>;
}
