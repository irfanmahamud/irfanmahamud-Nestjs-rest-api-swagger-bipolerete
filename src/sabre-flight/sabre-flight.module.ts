import { Module } from '@nestjs/common';
import { AuthenticationModule } from './api/authentication.module';
import { SabreFlightService } from './sabre-flight.service';
import { SabreFlightController } from './sabre-flight.controller';
import { SearchModule } from './api/search.module';

@Module({
  imports: [AuthenticationModule, SearchModule],
  providers: [SabreFlightService],
  controllers:[SabreFlightController],
  exports: [SabreFlightService],
})
export class SabreFlightModule {}