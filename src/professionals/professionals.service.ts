import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository, MoreThanOrEqual } from 'typeorm';
import { Professional } from '../entities/professional.entity';
import { Slot } from '../entities/slot.entity';

@Injectable()
export class ProfessionalsService {
  constructor(
    @InjectRepository(Professional) private proRepo: Repository<Professional>,
    @InjectRepository(Slot) private slotRepo: Repository<Slot>,
  ) {}

  async search(
    query?: string,
    city?: string,
    specialty?: string,
    minRating?: number,
  ) {
    const where: any = {};
    if (query) where.name = Like(`%${query}%`);
    if (city) where.city = city;
    if (specialty) where.specialty = specialty;

    // ✅ Solo aplicar filtro si el frontend lo manda
    if (minRating !== undefined) {
      where.rating = MoreThanOrEqual(minRating);
    }

    return this.proRepo.find({
      where,
      order: { rating: 'DESC' },
    });
  }

  async getSlots(professionalId: number, onlyAvailable = 'true') {
    const where: any = { professional_id: professionalId };
    if (onlyAvailable === 'true') where.is_booked = 0;

    return this.slotRepo.find({
      where,
      order: { starts_at: 'ASC' },
    });
  }
}
