import { EntityRepository, Repository } from 'typeorm';

import { Appointment } from '../infra/typeorm/entities/appointment';

@EntityRepository(Appointment)
export class AppointmentsRepository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date }, // short syntax { date: date }, date equal date (param)
    });

    return findAppointment || null;
  }
}
