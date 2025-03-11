import { IsString, IsOptional } from 'class-validator';

export class TrackQueryDto {
  @IsString()
  startDate: string;

  @IsString()
  endDate: string;

  @IsString()
  @IsOptional()
  imei?: string;
}
