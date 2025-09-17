import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateBookingDto {
  @IsInt()
  professionalId: number;

  @IsInt()
  slotId: number;

  @IsString()
  @IsNotEmpty()
  clientName: string; // más adelante esto saldrá del usuario logueado
}
