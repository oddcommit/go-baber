import { Appointment } from '../infra/typeorm/entities/appointment';
import { ICreateAppointmentDTO } from '../dtos/interface-create-appointment-dto';

export interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
