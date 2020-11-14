import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('APPOINTMENTS')
export class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider: string;

  @Column('timestamp with time zone')
  date: Date;
}
