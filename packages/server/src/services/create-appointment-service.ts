import { startOfHour } from 'date-fns';

import { Appointment } from '../models/appointment';
import { AppointmentsRepository } from '../repositories/appointments-repository';
import { appointmentsRouter } from '../routes/appointmenst.routes';

interface RequestDTO {
  provider: string;
  date: Date;
}

export class CreateAppointmentService {
  private appointmentsRepository: AppointmentsRepository;

  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ provider, date }: RequestDTO): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}
