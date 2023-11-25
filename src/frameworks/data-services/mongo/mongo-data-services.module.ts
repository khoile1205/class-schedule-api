import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IDataServices } from '../../../core';
import {
  Author,
  AuthorSchema,
  Book,
  BookSchema,
  Genre,
  GenreSchema,
} from './model';
import { MongoDataServices } from './mongo-data-services.service';
import configuration from 'src/configuration';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Author.name, schema: AuthorSchema },
      { name: Book.name, schema: BookSchema },
      { name: Genre.name, schema: GenreSchema },
    ]),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('database.connectionString'),
      }),
      inject: [ConfigService],
    })
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule { }
