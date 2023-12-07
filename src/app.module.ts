import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './configuration';
import { ExceptionsModule, LoggerModule, MongoModule, UserModule } from './modules';
import { AuthModule } from './modules/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    LoggerModule,
    MongoModule,
    UserModule,
    AuthModule,
    ExceptionsModule
  ],
})
export class AppModule { }
