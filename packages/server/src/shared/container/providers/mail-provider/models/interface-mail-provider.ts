import { ISendMailDTO } from '../dtos/interface-send-mail-dto';

export interface IMailProvider {
  sendMail(data: ISendMailDTO): Promise<void>;
}
