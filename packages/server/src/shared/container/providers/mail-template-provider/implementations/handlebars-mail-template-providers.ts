import handlebars from 'handlebars';
import fs from 'fs';

import { IParseMailTemplateDTO } from '../dtos/interface-parse-mail-template-dto';
import { IMailTemplateProvider } from '../models/interface-mail-template-provider';

export class HandlebarsMailTemplateProvider implements IMailTemplateProvider {
  public async parse({
    file,
    variables,
  }: IParseMailTemplateDTO): Promise<string> {
    const templateFileContent = fs.promises.readFile(file, {
      encoding: 'utf-8',
    });

    const parseTemplate = handlebars.compile(templateFileContent);

    return parseTemplate(variables);
  }
}
