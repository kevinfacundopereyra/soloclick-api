import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Slot } from './slot.entity';

@Entity('professionals')
export class Professional {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  specialty: string;

  @Column()
  city: string;

  @Column('decimal', { precision: 2, scale: 1, default: 4.5 })
  rating: number;

  @OneToMany(() => Slot, (slot) => slot.professional)
  slots: Slot[];
}
