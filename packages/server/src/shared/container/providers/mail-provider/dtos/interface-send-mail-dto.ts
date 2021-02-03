import { IParseMailTemplateDTO } from '@shared/container/providers/mail-template-provider/dtos/interface-parse-mail-template-dto';

interface IMailContact {
  name: string;
  email: string;
}

export interface ISendMailDTO {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  templateData: IParseMailTemplateDTO;
}
