import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProfessionalsService } from './professionals.service';

@Controller('professionals')
export class ProfessionalsController {
  constructor(private readonly service: ProfessionalsService) {}

  // GET /professionals?q=ana&city=Buenos%20Aires&specialty=Peluquería&minRating=4.5
  @Get()
  search(
    @Query('q') q?: string,
    @Query('city') city?: string,
    @Query('specialty') specialty?: string,
    @Query('minRating') minRating?: string,
  ) {
    return this.service.search(
      q,
      city,
      specialty,
      minRating ? Number(minRating) : undefined,
    );
  }

  // GET /professionals/:id/slots?onlyAvailable=true
  @Get(':id/slots')
  getSlots(
    @Param('id') id: string,
    @Query('onlyAvailable') onlyAvailable = 'true',
  ) {
    return this.service.getSlots(Number(id), onlyAvailable);
  }
}
