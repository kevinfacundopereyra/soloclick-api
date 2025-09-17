// src/bookings/bookings.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from '../entities/booking.entity';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepo: Repository<Booking>,
  ) {}

  async reserve(professionalId: number, slotId: number, clientName: string) {
    // Creamos la reserva usando las propiedades de la entidad (camelCase)
    const booking = this.bookingRepo.create({
      professionalId,
      slotId,
      clientName,
    });

    // Guardamos la reserva en la base de datos
    return await this.bookingRepo.save(booking);
  }
}
