import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { SearchService } from './search.service';

@Module({
  imports: [
    HttpModule,
    ConfigModule,
  ],
  providers: [SearchService],
  exports: [SearchService],
})
export class SearchModule {}
