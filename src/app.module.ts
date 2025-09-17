import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Professional } from './entities/professional.entity';
import { Slot } from './entities/slot.entity';
import { Booking } from './entities/booking.entity';
import { ProfessionalsModule } from './professionals/professionals.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [Professional, Slot, Booking],
      synchronize: false, // BD ya la creamos con SQL
      autoLoadEntities: true,
    }),
    ProfessionalsModule,
    BookingsModule,
  ],
})
export class AppModule {}
