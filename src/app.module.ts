import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { join } from 'path';
import { SabreFlightModule } from './sabre-flight/sabre-flight.module';
import { CacheModule } from '@nestjs/cache-manager';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'tm_otadb_11',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
      logging: true,  // Enable logging
    }),
    UsersModule,
    SabreFlightModule,
    CacheModule.register({ isGlobal: true }),
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}