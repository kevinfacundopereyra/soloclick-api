import { Body, Controller, Post } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly service: BookingsService) {}

  // POST /bookings
  // { "professionalId": 1, "slotId": 2, "clientName": "Zahir" }
  @Post()
  reserve(@Body() bookingData: any) {
    console.log('Body recibido:', bookingData);
    return this.service.reserve(
      bookingData.professionalId,
      bookingData.slotId,
      bookingData.clientName,
    );
  }
}
