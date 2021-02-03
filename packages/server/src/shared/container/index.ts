import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import { IAppointmentsRepository } from '@modules/appointments/repositories/interface-appointments-repository';
import { AppointmentsRepository } from '@modules/appointments/infra/typeorm/repositories/appointments-repository';

import { IUsersRepository } from '@modules/users/repositories/interface-users-repository';
import { UsersRepository } from '@modules/users/infra/typeorm/repositories/users-repository';

// import { IUserTokensRepository } from '@modules/users/repositories/interface-user-tokens-repository';
// import { UserTokensRepository } from '@modules/users/infra/typeorm/repositories/';

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
