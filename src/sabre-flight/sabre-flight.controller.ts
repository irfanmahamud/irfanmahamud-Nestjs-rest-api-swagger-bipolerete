import { Body, Controller, Inject, Post, UseInterceptors } from '@nestjs/common';
import { SabreFlightService } from './sabre-flight.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SearchRequestDto } from './dto/search-request.dto';
import { CACHE_MANAGER, CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { HttpService } from '@nestjs/axios';

@ApiTags('Sabre-flight')
@Controller('sabre-flight')
export class SabreFlightController {
  constructor(
    private readonly sabreFlightService: SabreFlightService,
    @Inject(CACHE_MANAGER) private cacheService: Cache,
  ) { }

  @Post()
  @ApiResponse({ status: 201, description: 'Search is successful.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({
    type: SearchRequestDto,
    description: 'Json structure for user object',
  })
  async search(@Body() searchRequestDto) {
    return await this.sabreFlightService.search(searchRequestDto);
  }
}
