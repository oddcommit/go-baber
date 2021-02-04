import { Appointment } from '../infra/typeorm/entities/appointment';
import { ICreateAppointmentDTO } from '../dtos/interface-create-appointment-dto';
import { IFindAllInMonthFromProviderDTO } from '../dtos/interface-find-all-in-month-from-provider-dto';
import { IFindAllInDayFromProviderDTO } from '../dtos/interface-find-all-in-day-from-provider-dto';

export interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
  findAllInMonthFromProvider(
    data: IFindAllInMonthFromProviderDTO,
  ): Promise<Appointment[]>;
  findAllInDayFromProvider(
    data: IFindAllInDayFromProviderDTO,
  ): Promise<Appointment[]>;
}
