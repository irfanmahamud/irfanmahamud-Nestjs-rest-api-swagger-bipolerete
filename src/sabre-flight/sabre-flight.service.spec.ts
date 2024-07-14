import { Test, TestingModule } from '@nestjs/testing';
import { SabreFlightService } from './sabre-flight.service';

describe('SabreFlightService', () => {
  let service: SabreFlightService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SabreFlightService],
    }).compile();

    service = module.get<SabreFlightService>(SabreFlightService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
