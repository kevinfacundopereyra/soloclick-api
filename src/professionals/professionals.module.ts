import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessionalsController } from './professionals.controller';
import { ProfessionalsService } from './professionals.service';
import { Professional } from '../entities/professional.entity';
import { Slot } from '../entities/slot.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Professional, Slot])],
  controllers: [ProfessionalsController],
  providers: [ProfessionalsService],
  exports: [ProfessionalsService],
})
export class ProfessionalsModule {}
