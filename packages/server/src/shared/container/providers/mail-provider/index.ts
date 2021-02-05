import { container } from 'tsyringe';

import mailConfig from '@config/mail';
import { IMailProvider } from './models/interface-mail-provider';

import { EtherealMailProvider } from './implementations/ethereal-mail-provider';
import { SesMailProvider } from './implementations/ses-mail-provider';

const providers = {
  ethereal: container.resolve(EtherealMailProvider),
  ses: container.resolve(SesMailProvider),
};

container.registerInstance<IMailProvider>(
  'MailProvider',
  providers[mailConfig.driver],
);
