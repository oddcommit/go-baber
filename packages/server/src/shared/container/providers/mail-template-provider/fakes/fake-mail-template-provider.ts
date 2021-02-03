import { IMailTemplateProvider } from '../models/interface-mail-template-provider';

export class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse(): Promise<string> {
    return 'Mail content';
  }
}
