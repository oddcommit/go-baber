import { container } from 'tsyringe';

import { IMailTemplateProvider } from './models/interface-mail-template-provider';

import { HandlebarsMailTemplateProvider } from './implementations/handlebars-mail-template-providers';

const providers = {
  handlebars: HandlebarsMailTemplateProvider,
};

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  providers.handlebars,
);
