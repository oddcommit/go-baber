import { container } from 'tsyringe';

import { IStorageProvider } from './storage-provider/models/interface-storage-provider';
import { DiskStorageProvider } from './storage-provider/implementations/disk-storage-provider';

import { IMailProvider } from './mail-provider/models/interface-mail-provider';
import { EtherealMailProvider } from './mail-provider/implementations/ethereal-mail-provider';

import { IMailTemplateProvider } from './mail-template-provider/models/interface-mail-template-provider';
import { HandlebarsMailTemplateProvider } from './mail-template-provider/implementations/handlebars-mail-template-providers';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  HandlebarsMailTemplateProvider,
);

container.registerInstance<IMailProvider>(
  'MailProvider',
  container.resolve(EtherealMailProvider),
);
