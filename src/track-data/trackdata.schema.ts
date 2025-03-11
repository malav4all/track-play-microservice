import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'TRACK_DATA' })
export class TrackData extends Document {
  @Prop()
  latitude: number;

  @Prop()
  longitude: number;

  @Prop()
  altitude: number;

  @Prop()
  imei: string;

  @Prop()
  bearing: number;

  @Prop()
  deviceType: string;

  @Prop()
  dateTime: string;
}

export const TrackDataSchema = SchemaFactory.createForClass(TrackData);
