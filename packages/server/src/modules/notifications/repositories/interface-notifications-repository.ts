import { ICreateNotificationDTO } from '../dtos/interface-create-notification-dto';
import { Notification } from '../infra/typeorm/schemas/notification';

export interface INotificationsRepository {
  create(data: ICreateNotificationDTO): Promise<Notification>;
}
