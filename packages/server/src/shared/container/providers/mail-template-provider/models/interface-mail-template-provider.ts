import { IParseMailTemplateDTO } from '../dtos/interface-parse-mail-template-dto';

export interface IMailTemplateProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
