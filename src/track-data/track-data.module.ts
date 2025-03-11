import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackDataSchema } from './trackdata.schema';
import { TrackDataController } from './track-data.controller';
import { TrackDataService } from './track-data.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'TRACK_DATA', schema: TrackDataSchema },
    ]),
  ],
  controllers: [TrackDataController],
  providers: [TrackDataService],
})
export class TrackDataModule {}
