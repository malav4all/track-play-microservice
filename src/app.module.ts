import { Module } from '@nestjs/common';
import { TrackDataModule } from './track-data/track-data.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        uri: process.env.DB_URL,
      }),
    }),
    TrackDataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
