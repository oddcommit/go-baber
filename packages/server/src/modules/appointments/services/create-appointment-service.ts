import { startOfHour } from 'date-fns';
import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/app-error';

import { Appointment } from '../infra/typeorm/entities/appointment';
import { IAppointmentsRepository } from '../repositories/interface-appointments-repository';

interface IRequestDTO {
  provider_id: string;
  date: Date;
}

@injectable()
export class CreateAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({
    provider_id,
    date,
  }: IRequestDTO): Promise<Appointment> {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked');
    }

    const appointment = await this.appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    return appointment;
  }
}
