import { ObjectID } from 'mongodb';

import { INotificationsRepository } from '@modules/notifications/repositories/interface-notifications-repository';
import { ICreateNotificationDTO } from '@modules/notifications/dtos/interface-create-notification-dto';

import { Notification } from '../../infra/typeorm/schemas/notification';

export class FakeNotificationsRepository implements INotificationsRepository {
  private notifications: Notification[] = [];

  public async create({
    content,
    recipient_id,
  }: ICreateNotificationDTO): Promise<Notification> {
    const notification = new Notification();

    Object.assign(notification, { id: new ObjectID(), content, recipient_id });

    this.notifications.push(notification);

    return notification;
  }
}
