import {
  Controller,
  Get,
  Query,
  HttpStatus,
  HttpException,
  Logger,
} from '@nestjs/common';
import { TrackDataService } from './track-data.service';
import { TrackQueryDto } from './dto/track-query.dto';

@Controller('trackdata')
export class TrackDataController {
  private readonly logger = new Logger(TrackDataController.name);

  constructor(private readonly trackDataService: TrackDataService) {}

  @Get()
  async getTrackData(@Query() query: TrackQueryDto) {
    const { startDate, endDate, imei } = query;
    try {
      const result = await this.trackDataService.getTrackData(
        startDate,
        endDate,
        imei,
      );

      return result;
    } catch (error) {
      this.logger.error(
        `Error getting track data: ${error.message}`,
        error.stack,
      );

      if (error instanceof HttpException) {
        throw error;
      }

      throw new HttpException(
        {
          success: false,
          message: error.message || 'An unexpected error occurred',
          error: error.name || 'InternalServerError',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
