import { container } from 'tsyringe';

import { IHashProvider } from './hash-provider/models/interface-hash-provider';
import { BCryptHashProvider } from './hash-provider/implementations/bcrypt-hash-provider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
