import { ISendMailDTO } from '../dtos/interface-send-mail-dto';
import { IMailProvider } from '../models/interface-mail-provider';

export class FakeMailProvider implements IMailProvider {
  private messages: ISendMailDTO[] = [];

  public async sendMail(message: ISendMailDTO): Promise<void> {
    this.messages.push(message);
  }
}
