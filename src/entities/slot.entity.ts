import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Professional } from './professional.entity';

@Entity('slots')
export class Slot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  professional_id: number;

  @ManyToOne(() => Professional, (pro) => pro.slots)
  @JoinColumn({ name: 'professional_id' })
  professional: Professional;

  @Column({ type: 'datetime' })
  starts_at: Date;

  @Column({ type: 'datetime' })
  ends_at: Date;

  @Column({ type: 'tinyint', default: 0 })
  is_booked: number; // 0 libre, 1 reservado
}
