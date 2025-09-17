// src/entities/booking.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'professional_id' })
  professionalId: number;

  @Column({ name: 'slot_id' })
  slotId: number;

  @Column({ name: 'client_name' })
  clientName: string;
}
