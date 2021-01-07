import { uuid } from 'uuidv4';
import { isEqual } from 'date-fns';

import { IAppointmentsRepository } from '@modules/appointments/repositories/interface-appointments-repository';
import { ICreateAppointmentDTO } from '@modules/appointments/dtos/interface-create-appointment-dto';

import { Appointment } from '../../infra/typeorm/entities/appointment';

export class FakeAppointmentsRepository implements IAppointmentsRepository {
  private appointments: Appointment[] = [];

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(appointment.date, date),
    );

    return findAppointment;
  }

  public async create({
    provider_id,
    date,
  }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = new Appointment();

    Object.assign(appointment, { id: uuid(), date, provider_id });

    this.appointments.push(appointment);

    return appointment;
  }
}
